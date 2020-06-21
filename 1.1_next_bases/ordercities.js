const inhabitantsCityName = {Paris: "Parisiens", Blois: "Blésois", Marseille: "Marseillais", Lille: "Lillois"}

const numberInhabitants = [["Lille", 232741],["Paris", 2148000],["Blois", 45710], ["Marseille", 861635]]

function orderCities(name, number) {
  let order = []
  let ranges = number.sort((a, b) => a[1] - b[1])
  console.log(ranges)
  ranges.forEach(city => {
    for (let key of Object.keys( name )) {
      if (city[0] == key) {
        order.push(name[key])
      }
    };
  });
  return order.reverse()
}

console.log(orderCities(inhabitantsCityName, numberInhabitants)) // retourne ["Parisiens", "Marseillais", "Lillois", "Blésois"]**
