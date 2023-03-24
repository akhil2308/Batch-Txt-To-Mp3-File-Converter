# Batch Txt To Mp3 File Converter 

*  This is a Node.js project used to convert a batch of text files(.txt) to audio files(.mp3,.wav).
*  This is created mainly for converting novels to audio novels.
*  This can be considered as an extension of this project https://github.com/dipu-bd/lightnovel-crawler
*  This can be used to convert any text files to audio files (not just novels only).

## To Run

1.  Mention the name of the (path + folder name) where the audio files needed to be stored.
>   ![image](https://user-images.githubusercontent.com/46097218/154638948-29a9121e-14f1-4001-8b01-7db7796613ae.png)

2.  Mention the path where the text files are to be stored.
>  ![image](https://user-images.githubusercontent.com/46097218/154639176-3d2ff032-f863-4326-b740-a903a17a3a94.png)

3. Mention the characters( 汉字, ”, ’, _, -,@...) to be replaced that are not able to convert to audio.
>  ![image](https://user-images.githubusercontent.com/46097218/154640139-5af84c5a-76b3-42ec-b20e-6e0916394509.png)

4. Mention the speed of the speech to be converted in audioconvert() ( default is 1).
>  ![image](https://user-images.githubusercontent.com/46097218/154646300-a1fd1a44-0d29-4359-8a6f-e9a38efede72.png)

*  Run the following command in the terminal to convert the text files to audio files.
>  `node TextToAudioFileConverter.js`
