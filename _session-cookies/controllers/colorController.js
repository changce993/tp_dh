module.exports = colorController = {
  show: (req, res) => {
    res.render("color", {
      letras: 'black',
      color: req.cookies.background,
      message: req.session.message
    })

  },
  choose: (req, res) => {
    let color = req.body.color;
    let message = req.session.message
    let letras = req.cookies.background

    if (req.body.recordar != undefined) {
      res.cookie("background", color)
      console.log('..........')
      console.log(color)
      console.log(req.cookies.background)
    }

    req.session.message = `Elegiste el color: ${color}`
    
    res.render("color", {
      letras,
      color,
      message
    })

  }
}