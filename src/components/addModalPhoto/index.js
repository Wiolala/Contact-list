import React from "react";
import { Entypo } from "@expo/vector-icons";
import Modal from "../modal";
import { TouchableOpacity } from "react-native";
import styles from "./styles";

const AddPhotoModal = ({
    isOpen,
    closeModal,
    takePhoto,
    selectFromCameraRoll
}) => (
    <Modal
        isOpen={isOpen}
        closeModal={closeModal}>
        <TouchableOpacity
            onPress={() => takePhoto()}>
            <Entypo style={styles.icon} name="camera" />
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => selectFromCameraRoll()}>
            <Entypo style={styles.icon} name="image" />
        </TouchableOpacity>
    </Modal>
);

export default AddPhotoModal;