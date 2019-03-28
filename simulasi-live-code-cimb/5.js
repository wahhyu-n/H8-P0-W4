function animeReport(characters) {
    var roles = {};
    var titles = {};
    for (var i  = 0; i < characters.length; i++) {
        var id = characters[i].id;
        var role = characters[i].role;
        var commaName = characters[i].name;
        
        var firstName = "";
        for (var j = commaName.indexOf(",") + 2; j < commaName.length; j++) {
            firstName += commaName[j];
        }
        var lastName = "";
        for (var j = 0; j < commaName.indexOf(","); j++) {
            lastName += commaName[j];
        }
        var name = firstName + " " + lastName;
  
        var anime = characters[i].anime;
        if (roles[role] == undefined) roles[role] = [];
        roles[role].push(name);
        
        var obj = {"id": id, "name": commaName};
        if (titles[anime] == undefined) titles[anime] = [];
        titles[anime].push(obj);
    }
  
    return {"Role": roles, "Title": titles};
  }
  
  console.log(JSON.stringify((animeReport(characters)), null, 4));
  var characters =
  [
    { id: 720, name: 'Liebert, Anna', role: 'Main', anime: 'Monster' },
    { id: 721, name: 'Liebert, Johan', role: 'Main', anime: 'Monster' },
    { id: 722, name: 'Tenma, Kenzou', role: 'Main', anime: 'Monster' },
    { id: 723, name: 'Bernhardt, Hugo', role: 'Supporting', anime: 'Monster' },
    { id: 724, name: 'Elric, Edward', role: 'Main', anime: 'FMA' },
    { id: 725, name: 'Elric, Alphonse', role: 'Main', anime: 'FMA' },
    { id: 726, name: 'Wanijima, Agito', role: 'Main', anime: 'Air gear' }
  ]