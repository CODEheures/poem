<div id="etapes">
    <div class="filter">
        <p>sans distraction</p>
        <input type="checkbox" id="no-distraction" name="no-distraction"/>
    </div>
    <ul>
        <li><a href="#tabs-1">Leçon</a></li>
        <li><a href="#tabs-2">Evaluation étape 1</a></li>
        <li><a href="#tabs-3">Evaluation étape 2</a></li>
        <li class="unable"><a href="#tabs-4">Evaluation étape 3</a></li>
        <li><a href="#tabs-5">Description de la leçon</a></li>
    </ul>
    <div id="tabs-1">
        <div class="tab-header">
            <h1>Titre lorem ipsum dolor sit amet</h1>
            <div class="buttons">
                <a class="btn" href="http://poem.dev/public/lessons/guide_python_stand_alone.pdf">Télécharger le
                    fichier</a>
            </div>
        </div>
        <div class="lesson-frame">
            <embed width="100%" height="600px" src="./public/lessons/guide_python_stand_alone.pdf"
                   type="application/pdf"></embed>
        </div>
    </div>
    <div id="tabs-2">
        <div class="tab-header">
            <p class="consigne"><strong>Répondez aux questions et notez leur qualité.</strong> Vous pouvez à tout moment
                retourner voir la leçon et revenir ici</p>
            <div class="buttons">
                <a class="btn" href="#">Sauvegarder</a>
                <a class="btn" href="#">Valider</a>
            </div>
        </div>
        <div class="left">
            <div class="question">
                <div class="title">Question 1</div>
                <textarea class="questionEditor" name="questionEditor1" id="questionEditor1" rows="10"
                          cols="80"></textarea>
            </div>
            <div class="reponse">
                <div class="title">Votre réponse 1</div>
                <textarea class="reponseEditor" name="reponseEditor1" id="reponseEditor1" rows="10"
                          cols="80"></textarea>
            </div>
        </div>
        <div class="right">
            <p>Merci de <strong>noter cette question</strong> pour accéder à l’étape suivante</p>
            <div class="slider">
                <div class="bar"></div>
                <div class="bar2"></div>
                <div class="circle">0</div>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="left">
            <div class="question">
                <div class="title">Question 2</div>
                <textarea class="questionEditor" name="questionEditor2" id="questionEditor2" rows="10"
                          cols="80"></textarea>
            </div>
            <div class="reponse">
                <div class="title">Votre réponse 2</div>
                <textarea class="reponseEditor" name="reponseEditor2" id="reponseEditor2" rows="10"
                          cols="80"></textarea>
            </div>
        </div>
        <div class="right">
            <p>Merci de <strong>noter cette question</strong> pour accéder à l’étape suivante</p>
            <div class="slider">
                <div class="bar"></div>
                <div class="bar2"></div>
                <div class="circle">0</div>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="left">
            <div class="question">
                <div class="title">Question 3</div>
                <textarea class="questionEditor" name="questionEditor3" id="questionEditor3" rows="10"
                          cols="80"></textarea>
            </div>
            <div class="reponse">
                <div class="title">Votre réponse 3</div>
                <textarea class="reponseEditor" name="reponseEditor3" id="reponseEditor3" rows="10"
                          cols="80"></textarea>
            </div>
        </div>
        <div class="right">
            <p>Merci de <strong>noter cette question</strong> pour accéder à l’étape suivante</p>
            <div class="slider">
                <div class="bar"></div>
                <div class="bar2"></div>
                <div class="circle">0</div>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
    <div id="tabs-3">
        <p>étape 2</p>
    </div>
    <div id="tabs-4">
        <p>étape 3</p>
    </div>
    <div id="tabs-5">
        <h1>Description de la leçon</h1>
        <div class="lesson-description">
            <div class="lesson-vignette">
                <img src="/public/img/microbiology.jpg" />
            </div>
            <div class="prof-avatar">
                <img src="/css/assets/avatar.png" class="prof-avatar"/>
                <p>Pr Pierre C</p>
            </div>
            <div class="middle">
                <h2 class="title">Programmation Génétique : Introns, Bloat et Surapprentissage</h2>
                <h3 class="description-courte">Cette ligne décrit la leçon en 10 mots Lorem Ipsum</h3>
                <p class="description-longue">Ce paragraphe décrit la léçon plus précisement car on aime bien decrire les choses .Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda error expedita illo iure
                    laborum, nemo recusandae sequi suscipit voluptatibus! Aspernatur eligendi est, laborum laudantium non odio
                    saepe ut veritatis.</p>
                <p class="prof-quote">J'encourage tous les curieux à venir s'inscrire à cette formidable leçon.
                    <br /> N'hesitez pas vous apprendrez plein de choses nouvelles!
                </p>
            </div>
            <div class="clearfix"></div>
            <div class="infos">
                <p><span class="btn btn-info">ELO 4000</span><span class="btn btn-info">Durée estimée: 2h</span><span class="btn btn-info">Note moyenne: 12.3/20</span></p>
            </div>
        </div>
        <div class="lesson-action">
            <p>
                <a href="/index.php?want=front_lesson#tabs-1" class="btn btn-big" id="to-lesson">Voir la leçon</a>
                <a href="#" class="btn btn-big" id="inscription">S'inscrire à cette leçon</a>
                <a href="/index.php?want=front_explorer" class="btn btn-big">Retour à l'explorateur</a>
            </p>
        </div>
        <div class="complements">
            <h2>Informations Complémentaires</h2>
            <p class="guide">Pour aller plus loin après cette leçon, votre professeur à laissé les informations suivantes</p>
            <p class="infos">
                Cette leçon fait l'objet d'une étude dont les sources sont dispo ici: http://mon-etude.fr<br />
                Vous pouvez aller vois aussi ces liens:<br />
                -http://mon-premier-lien.com<br />
                -http://un-autre-lien.org<br />
                -http://mon-dernier-lien.net<br />
            </p>
        </div>
    </div>
</div>