// Base de datos simulada
const tipos = [
    { value: "normal", text: "Tipo normal" },
    { value: "planta", text: "Tipo planta" },
    { value: "agua", text: "Tipo agua" },
    { value: "fuego", text: "Tipo fuego" },
    { value: "electrico", text: "Tipo eléctrico"},
    { value: "tierra", text: "Tipo tierra"},
    { value: "roca", text: "Tipo roca"},
    { value: "volador", text: "Tipo volador"},
    { value: "bicho", text: "Tipo bicho"},
    { value: "psiquico", text: "Tipo psíquico"},
    { value: "siniestro", text: "Tipo siniestro"},
    { value: "fantasma", text: "Tipo fantasma"},
    { value: "dragon", text: "Tipo dragón"},
    { value: "hada", text: "Tipo hada"},
    { value: "hielo", text: "Tipo hielo"},
    { value: "acero", text: "Tipo acero"},
    { value: "veneno", text: "Tipo veneno"},
    { value: "lucha", text: "Tipo lucha"}
];

const pokemon = [
    // Normal
    { nombre: "Blissey", tipo: "normal" },
    { nombre: "Kangaskhan", tipo: "normal" },
    { nombre: "Snorlax", tipo: "normal" },

    // Fuego
    { nombre: "Charizard", tipo: "fuego" },
    { nombre: "Blaziken", tipo: "fuego" },
    { nombre: "Salazzle", tipo: "fuego" },

    // Agua
    { nombre: "Blastoise", tipo: "agua" },
    { nombre: "Swampert", tipo: "agua" },
    { nombre: "Wishiwashi", tipo: "agua" },

    // Planta
    { nombre: "Venusaur", tipo: "planta" },
    { nombre: "Sceptile", tipo: "planta" },
    { nombre: "Lurantis", tipo: "planta" },

    // Eléctrico
    { nombre: "Pikachu", tipo: "electrico" },
    { nombre: "Togedemaru", tipo: "electrico" },
    { nombre: "Zeraora", tipo: "electrico" },

    // Tierra
    { nombre: "Dugtrio", tipo: "tierra" },
    { nombre: "Mudsdale", tipo: "tierra" },
    { nombre: "Ursaluna", tipo: "tierra" },

    // Roca
    { nombre: "Onix", tipo: "roca" },
    { nombre: "Rhyperior", tipo: "roca" },
    { nombre: "Gigalith", tipo: "roca" },

    // Volador
    { nombre: "Salamence", tipo: "volador" },
    { nombre: "Pidgeot", tipo: "volador" },
    { nombre: "Noivern", tipo: "volador" },

    // Acero
    { nombre: "Steelix", tipo: "acero" },
    { nombre: "Aegislash", tipo: "acero" },
    { nombre: "Lucario", tipo: "acero" },

    // Psíquico
    { nombre: "Metagross", tipo: "psiquico" },
    { nombre: "Alakazam", tipo: "psiquico" },
    { nombre: "Espeon", tipo: "psiquico" },

    // Siniestro
    { nombre: "Tyranitar", tipo: "siniestro" },
    { nombre: "Umbreon", tipo: "siniestro" },
    { nombre: "Hydreigon", tipo: "siniestro" },

    // Fantasma
    { nombre: "Dragapult", tipo: "fantasma" },
    { nombre: "Gengar", tipo: "fantasma" },
    { nombre: "Chandelure", tipo: "fantasma" },

    // Dragón
    { nombre: "Dragonite", tipo: "dragon" },
    { nombre: "Garchomp", tipo: "dragon" },
    { nombre: "Haxorus", tipo: "dragon" },

    // Hada
    { nombre: "Togekiss", tipo: "hada" },
    { nombre: "Sylveon", tipo: "hada" },
    { nombre: "Mawile", tipo: "hada" },

    // Hielo
    { nombre: "Glaceon", tipo: "hielo" },
    { nombre: "Lapras", tipo: "hielo" },
    { nombre: "Weavile", tipo: "hielo" },

    // Veneno
    { nombre: "Crobat", tipo: "veneno" },
    { nombre: "Drapion", tipo: "veneno" },
    { nombre: "Toxapex", tipo: "veneno" },

    // Lucha
    { nombre: "Bisharp", tipo: "lucha" },
    { nombre: "Machamp", tipo: "lucha" },
    { nombre: "Conkeldurr", tipo: "lucha" },

    // Bicho
    { nombre: "Scizor", tipo: "bicho" },
    { nombre: "Heracross", tipo: "bicho" },
    { nombre: "Volcarona", tipo: "bicho" }
];

// Referencia al elemento <select>
const txtNombre = document.getElementById('txtNombre');
const txtCorreoElectronico = document.getElementById('txtCorreoElectronico');
const selectTipos = document.getElementById("select-tipos");
const selectPokemon = document.getElementById('select-pokemon');
const selectEdicion = document.getElementById('select-edicion');
const emailInvalido = document.getElementById('emailInvalido');

//load
cargarSelectTipos();

form.addEventListener('submit', function(event) {
    event.preventDefault();
    //validación
    
});

txtNombre.addEventListener("blur", () => {
    // Validar si el campo está vacío al salir
    if (txtNombre.value.trim() === "") {
        txtNombre.classList.add('invalid');
        txtNombre.classList.remove('valid');
    } else {
        txtNombre.classList.add('valid');
        txtNombre.classList.remove('invalid');
    }
});
txtCorreoElectronico.addEventListener("blur", () => {
    if(validateEmail() == true){
        emailInvalido.classList.add('hidden');
        txtCorreoElectronico.classList.add('valid');
        txtCorreoElectronico.classList.remove('invalid');
    }
    else{
        emailInvalido.classList.remove('hidden');
        txtCorreoElectronico.classList.add('invalid');
        txtCorreoElectronico.classList.remove('valid');
    }
    }
);

// Evento para detectar cambios en el primer select
selectTipos.addEventListener("change", () => {
    const tipoSeleccionado = selectTipos.value; // Accedemos al valor del select directamente
    if (tipoSeleccionado) {
        cargarPokemonsPorTipo(tipoSeleccionado);
    } else {
        // Limpiar si no hay selección
        pokemonSelect.innerHTML = '<option value="">Selecciona un Pokémon</option>';
    }
});

function cargarSelectTipos()
{
    // Generar dinámicamente las opciones
    // Crear la opción predeterminada "Seleccione un tipo"
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Seleccione un tipo";
    defaultOption.disabled = true;
    defaultOption.selected = true;

    // Agregar la opción al select
    selectTipos.appendChild(defaultOption);
        tipos.forEach(tipo => {
            const option = document.createElement("option");
            option.value = tipo.value;
            option.textContent = tipo.text;
            selectTipos.appendChild(option);
        });
}

function validarNombre(){
    if(txtNombre.value === ""){
        txtNombre.classList.add('invalid');
    }
    else{
        txtNombre.classList.remove('invalid');
    }
}
function validarCorreoElectronico(){
    if(txtCorreoElectronico.value === ""){
        txtCorreoElectronico.classList.add('invalid');
    }
    else{
        txtCorreoElectronico.classList.remove('invalid');
    }
}

function validateEmail(){
	// Define our regular expression.
	let emailValido =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	// Using test we can check if the text match the pattern
	if( emailValido.test(txtCorreoElectronico.value) ){
		return true;
	}else{
		return false;
	}
}

// Función para filtrar y cargar los Pokémon en el segundo select
function cargarPokemonsPorTipo(tipoSeleccionado) {
    // Limpiar opciones anteriores del segundo select
    selectPokemon.innerHTML = '<option value="">Selecciona un Pokémon</option>';
    
    // Filtrar Pokémon por tipo
    const pokemonsFiltrados = pokemon.filter(pokemon => pokemon.tipo === tipoSeleccionado);
    
    // Agregar opciones filtradas al select
    pokemonsFiltrados.forEach(pokemon => {
        const option = document.createElement("option");
        option.value = pokemon.nombre;
        option.textContent = pokemon.nombre;
        selectPokemon.appendChild(option);
    });
}