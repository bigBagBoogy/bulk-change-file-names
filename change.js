const fs = require("fs")

fs.readdir(".", (err, files) => {
  if (err) console.log(err)
  let counter = 0
  files.forEach((file) => {
    // below we specify a search term in between the slahes
    if (file.match(/yt1s.com - /)) {
      const remainderOfFileName = file.replace("yt1s.com - ", "")
      // above we specify what part of the file name we want to change
      // in this case we replace "yt1s.com - " by nothing   ""  (empty quotes)
      counter++

      console.log(remainderOfFileName) // lists all the new file names
      fs.rename(file, `${remainderOfFileName}`, (err) => {
        if (err) console.log(err)
      })
    }
  })
  console.log(counter) // the amount of files changed
})
