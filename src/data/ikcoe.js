
const ikcoe = {
    schools: [{ "sid": 8, "school": "Centre for Literacy & Continuing Education" }, { "sid": 11, "school": "Directorate of Undergraduate Studies" }, { "sid": 9, "school": "Early Childhood Care & Primary Education" }, { "sid": 2, "school": "General Education" }, { "sid": 1, "school": "Secondary Education, Arts & Social Sciences" }, { "sid": 3, "school": "Secondary Education, Languages" }, { "sid": 4, "school": "Secondary Education, Sciences" }, { "sid": 5, "school": "Secondary Education, Vocational & Technical Education" }, { "sid": 10, "school": "Special Needs, Adults & Non-Formal Education" }]
  }
  
  
  const test = (p1) => {
    console.log(p1)
  }
  
  // <div key={i}>{d.school}</div>)
  const iterate = (p1) => p1.map((d, i) => console.log(d.school))
  
  
  //test(ikcoe.schools[1].school)
  //iterate(ikcoe.schools)