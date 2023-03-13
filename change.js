const fs = require("fs")

fs.readdir(".", (err, files) => {
  if (err) console.log(err)
  let counter = 0
  files.forEach((file) => {
    if (file.match(/yt1s.com - /)) {
      const achtersteDeel = file.replace("yt1s.com - ", "")
      // const achtersteDeel = file.replace("yt1s.com - ", "")
      counter++

      console.log(achtersteDeel)
      fs.rename(file, `${achtersteDeel}`, (err) => {
        if (err) console.log(err)
      })
    }
  })
  console.log(counter)
})
