console.log("hello");
const DIALOGUE = [
        { user: "1", text: "Ahhh, rien de tel qu'une bonne matinée de codage ! Mon nouveau projet est presque terminé. Je suis une génie, mon code est parfait, comme d'habitude." },
        { user: "2", text: "Oh, vraiment ? Parfait, dis-tu ? Hihi, je crois que tu as oublié de fermer cette parenthèse ici... et là-bas aussi !" },
        { user: "1", text: "Quoi ?! Mais non, impossible ! Oh non, il y a des erreurs partout ! Comment est-ce possible ?!" },
        { user: "2", text: "Tu m'as sous-estimé, ma chère Licorne. Je suis le Bug, le maître du chaos dans ton monde parfait de lignes de code. Regarde ce que j'ai fait à ta boucle !" },
        { user: "1", text: "Mais pourquoi tu fais ça ?! Je veux juste écrire un beau code sans erreur !" },
        { user: "2", text: "Parce que c'est amusant ! Et avoue-le, tu te sentirais perdue sans moi. Qui d'autre te donnerait autant de défis à résoudre ?" },
        { user: "1", text: "Tu as peut-être raison... mais je finirai par te corriger, petit lapin ! Je vais traquer chaque bug, ligne par ligne, jusqu'à ce que tu disparaisses pour de bon !" },
        { user: "2", text: "Bonne chance avec ça ! Mais n'oublie pas, là où il y a du code, il y a toujours un petit bug quelque part..." },
        { user: "1", text: "On verra bien ! En attendant, je retourne au travail... et cette fois, je suis prête à tout !" }
    ];


    let currentIndex = 0;

    document.getElementById('startButton').addEventListener('click', () => {
        document.getElementById('welcomeText').style.display = 'none';
        document.getElementById('startButton').style.display = 'none';
    
        // Afficher la boîte de dialogue
        document.getElementById('dialogueBox').style.display = 'block';
    
        // Afficher les images
        document.getElementById('unicornImg').style.display = 'block';
        document.getElementById('rabbitImg').style.display = 'block';
    
        // Afficher le bouton "Suivant"
        document.getElementById('nextButton').style.display = 'inline-block';
    
        // Démarrer le dialogue
        displayNextLine();
    })
    
    document.getElementById('nextButton').addEventListener('click', () => {
        displayNextLine();
    });
    
    document.getElementById('restartButton').addEventListener('click',() => {
        currentIndex = 0;
        document.getElementById('dialogueBox').innerHTML = '';
        document.getElementById('startButton').style.display = 'inline-block';
        document.getElementById('restartButton').style.display = 'none';
        document.getElementById('nextButton').style.display = 'none';
        
        // Réinitialiser les images et le texte de bienvenue
        document.getElementById('unicornImg').style.display = 'none';
        document.getElementById('rabbitImg').style.display = 'none';
        document.getElementById('welcomeText').style.display = 'block';
        document.getElementById('dialogueBox').style.display = 'none';
    });

    function displayNextLine(){
        if(currentIndex < DIALOGUE.length){
            // Récupère l'objet de dialogue correspondant à l'index actuel.
            const LINE = DIALOGUE[currentIndex];
    
            // Sélectionne la boîte de dialogue dans le DOM.
            const dialogueBox = document.getElementById('dialogueBox');
    
            // Supprimer tout le contenu précédent dans la boîte de dialogue
            dialogueBox.innerHTML = '';
    
            // Crée un nouvel élément de paragraphe pour afficher le texte.
            const P = document.createElement('p'); 
            
            // Remplit le paragraphe avec le texte du dialogue actuel.
            P.textContent = `${LINE.text}`
    
            // Ajoute le paragraphe avec le texte à la boîte de dialogue dans le DOM.
            dialogueBox.appendChild(P);

            console.log(LINE.text);
            currentIndex ++;
        }else{
            document.getElementById('nextButton').style.display = 'none';
            document.getElementById('restartButton').style.display = 'inline-block';
        }
    }
