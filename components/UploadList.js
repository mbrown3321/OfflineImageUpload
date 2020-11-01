import React, {useEffect} from 'react';
import {ScrollView, View, Image, Text, StyleSheet, Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';

function UploadList({uploads, fetchUploads, addUpload}) {
  useEffect(() => {
    fetchUploads();
  }, []);

  const openImagePicker = () => {
    const options = {
      title: 'Select An Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (!response.didCancel && !response.error) {
        const source = 'data:image/jpeg;base64,' + response.data;
        addUpload(response.fileName, source);
      }
    });
  };

  return (
    <ScrollView>
      <Button title="Upload New Image" onPress={openImagePicker} />
      {uploads.map((upload, index) => (
        <View key={index}>
          <Image style={styles.image} source={{uri: upload.image}} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: 300,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});

export default UploadList;
