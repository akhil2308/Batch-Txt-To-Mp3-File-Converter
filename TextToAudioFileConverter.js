const fs = require('fs');
const say = require('say');

// path  where the converted audio files are to be stored 
const novel_name = "./" + "Doomsday Sanctuary"
// path where the txt files are stored
// recomented to have max 100 text files in a batch so to not use most of your cpu 
const novel_path = "./text/Chapter 1-100"

// used to covert data to a audio file with the name of the text file 
async function audioconvert(data, name) {
  await say.export(data, 'Cellos', 1.07, novel_name + "/" + name, (err) => {

     console.log('created an audio file ::' + name)
  })
}

// check if the name of the  folder where you want to store the converted audio file is stored 
if (!fs.existsSync(novel_name)) {
  fs.mkdirSync(novel_name);
}

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path + '/' + file).isDirectory();
  });
}

 // USED to remove the last line
async function removeLastLine(path,data) {
 console.log(path) 
 await readLastLines.read(path, 1).then((lines) =>{ 
  if  (lines.startsWith('Ps:')){
  data = data.replace(lines, '');
  }
  return data;
});

}

// read the text file , remove unwanted char and convert it to audio file
fs.readdir(novel_path, (err, files) => {

  files.forEach(async (file) => {
    audioName = file
    audioName= audioName.replace('txt', 'mp3');
    try {
      var data = fs.readFileSync(novel_path + '/' + file, 'utf8');



      /*  To remove some special char that you don't want or the chars that doesnot convert into audio properly*/
      //remove chiness char
      data=  data.replace(/[\u4e00-\u9fa5]/g, ''); 
      data =  data.replace(/_/g, '');
      data =  data.replace(/—/g, '');
      data =  data.replace(/’/g, '');
      data =  data.replace("()", '');
      data =  data.replace(/"/g, ' ');
      data =  data.replace(/-/g, ' ');
      data =  data.replace(/]/g, '');
      data =  data.replace('[', '');
      data=  data.replace(/…/g, '');
      data = data.replace(/www.mylovenovel.com , the fastest update of the webnovel!/g, '');
      data= data.replace(/Please report us if you find any errors so we can fix it asap!/g, '');
      data =  data.replace(/['”]+/g, '');
      data =  data.replace(/['“]+/g, '');
    
      //
      await audioconvert(data, audioName);
    }
    catch (e) {
      console.log('Error:', e.stack);
    }
  });
});

