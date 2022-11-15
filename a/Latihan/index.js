// -- kurung [] siku aray ,array masuk nya index
// kurung {} kurawal  object.\, aksesnya key dan mendapatkan velue -->
// <!-- const adalah tetap -->
// untuk object const
/// mencegah perubahan data


const animals = [
    {name:"budi", species:"Dog", class:{name:"mamalia"}},
    {name:"nemo", species:"Fish", class:{name:"Inverbrata"}},
    {name:"bayu", species:"Dog", class:{name:"mamalia"}},
    {name:"jalin", species:"Dog", class:{name:"mamalia"}},
    {name:"dory", species:"Fish", class:{name:"Inverbrata"}}
]
///buat sebuah fungsi untuk mengambil object yang species Dog,
// lalu dimasukan ke dalam variable dog

/// filter
let aquaticCreatures =  animals.filter(function(OnlyDog) {
    return OnlyDog.species == "Dog";
  });

  let onlyDogFilter = animals

  
/// maping
  let isDog = animals.map(animal=>{
    return {
        name :animal.name,
        isDog : animal.species == "Dog" ? true:false
    }
  })
  
//   console.log(aquaticCreatures);
/// forecgh
  let OnlyDog = [];
animals.forEach(animal => {
    if(animal.species == "Dog"){
        OnlyDog.push(animal);

    }
    
});



  
// jika fish ubah class menjadi ovipar

let mahluk = animals.filter(function(ovivar){
    return ovivar.class = ""
})