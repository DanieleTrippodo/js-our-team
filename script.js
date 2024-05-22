// tutti i membri del team
const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    }
];




// ! Mostra i dati in console ---------------------------------------------------------

//# Opzione n.1 (more simple)
for (let i = 0; i < teamMembers.length; i++){
    console.log(teamMembers[i]); 
}




//# Opzione n.2
// Stampa su console le informazioni di ogni membro
// teamMembers.forEach(member => {     /* "ForEach" legge in ordine tutti gli elementi dentro la nostra array */
//     console.log(`Name: ${member.name}, Role: ${member.role}, Photo: ${member.photo}`);
// });

// ! Fine controllo in console --------------------------------------------------------





// ? sezione per interagire con il DOM --------------------------------------------------

// selezioniamo il container del DOM con ID "team-container"
const teamContainer = document.getElementById('team-container');


// todo - Stampare ogni membro del team nel DOM