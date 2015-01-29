function renderTemplate(template, stringObject){
  var keys = Object.keys(stringObject);

  for (var i = 0; i < keys.length; i++) {
    var regex = new RegExp("<<+" + keys[i] + "+>>", "g");
    template = template.replace(regex, stringObject[keys[i]]);
  }
  return template;
}
