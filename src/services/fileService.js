import * as FileSystem from "expo-file-system";
import * as Contacts from 'expo-contacts';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
const contactDirectory = `${FileSystem.documentDirectory}contacts`;


const onException = (cb, errorHandler) => {
    try {
        return cb();
    } catch (err) {
        if (errorHandler) {
            return errorHandler(err);
        }
        console.error(err);
    }
}

export const cleanDirectory = async () => {
    await FileSystem.deleteAsync(contactDirectory);
}

export const remove = async contact => {
    return await onException(() => FileSystem.deleteAsync(`${contactDirectory}/${contact.name}-${contact.id}.json`, { idempotent: true }));
}

export const copyFile = async (file, newLocation) => {
    return await onException(() => FileSystem.copyAsync({
        from: file,
        to: newLocation
    }));
}

export const addContact = async contact => {
    const name = contact.name;
    const fileName = name.concat("-", contact.id ,".json");
    await onException(() => FileSystem.writeAsStringAsync(`${contactDirectory}/${fileName}`, JSON.stringify(contact), { encoding: FileSystem.EncodingType.UTF8 }));
    
    return {
        name: fileName,
        type: 'contact',
        file: await loadContact(fileName)
    };
};

export const loadContact = async fileName => {
    return await onException(() => FileSystem.readAsStringAsync(`${contactDirectory}/${fileName}`, {
        encoding: FileSystem.EncodingType.UTF8
    }));
}

const setupDirectory = async () => {
    const dir = await FileSystem.getInfoAsync(contactDirectory);
    if (!dir.exists) {
        await FileSystem.makeDirectoryAsync(contactDirectory);
    }
}


export const getAllContacts = async () => {
    // Check if directory exists
    await setupDirectory();

    const result = await onException(() => FileSystem.readDirectoryAsync(contactDirectory));
    return Promise.all(result.map(async fileName => {
        return {
            name: fileName,
            type: 'contact',
            file: await loadContact(fileName)
        };
    }));
};

export const importContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync();

        if (data.length > 0) {
            const newContacts = [];
            data.forEach(contact => {
                const newContact = {
                    name: contact.name,
                    id: uuidv4(),
                    phoneNumber: (contact.phoneNumbers.length > 0 ? contact.phoneNumbers[0].number : ""),
                    thumbnailPhoto: (contact.imageAvailable ? contact.image : "") 
                };
                newContacts.push(newContact);
            });
            await Promise.all(newContacts.map(contact => addContact(contact)));
        }
      }
};