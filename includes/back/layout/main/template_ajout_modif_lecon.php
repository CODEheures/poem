<section id="lecon">
    <form>
        <div class="row">
            <div class="col-sm-12">
                <a href="#" class="btn btn-danger btn-sm">Supprimer cette leçon</a>
                <div class="btn-group pull-right" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-primary">Enregistrer</button>
                    <button type="button" class="btn btn-secondary">Pré-visualiser</button>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 form-inline">
                <fieldset class="form-group public">
                    <label for="public-lesson"><sup><i class="fa fa-asterisk"></i></sup>Publique? </label>
                    <input class="form-control" id="public-lesson" type="checkbox" />
                    <div class="form-group prive-date hidden-xs-up">
                        <label for="prive-date">privé jusqu'au (maxi 2ans)</label>
                        <input class="form-control" id="prive-date" type="date" name="prive-date" placeholder="maxi 2ans: 12/12/2018"/>
                    </div>
                </fieldset>
            </div>
        </div>
        <div class="row lesson-or-url">
            <div class="col-sm-12">
                <div class="content-file">
                    <div class="row">
                        <div class="col-md-6 form-inline">
                            <fieldset class="form-group lesson-file">
                                <label for="lesson-file"><sup><i class="fa fa-asterisk"></i></sup>Fichier de la leçon</label>
                                <input type="file" id="lesson-file" class="form-control-file" name="lesson-file"/>
                                <div class="ou hidden-lg-down"><i class="fa fa-arrow-left"></i> OU <i class="fa fa-arrow-right"></i></div>
                                <p><small class="text-muted">choisir un fichier (pdf,mp4,ppt, 100Mo Maxi)</small></p>
                            </fieldset>
                        </div>
                        <div class="col-md-6 form-inline">
                            <div class="text-xs-center hidden-md-up"><i class="fa fa-arrow-up"></i> OU <i class="fa fa-arrow-down"></i></div>
                            <fieldset class="form-group lesson-file">
                                <label for="lesson-url"><span class="hidden-xl-up">ou </span>lien HTML</label>
                                <input type="url" id="lesson-url" class="form-control" name="lesson-url" placeholder="Ex: https://docs.google.com/presentation..."/>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 form-inline">
                <fieldset class="form-group title">
                    <label for="title"><sup><i class="fa fa-asterisk"></i></sup>Titre de la leçon</label>
                    <input type="text" id="title" class="form-control" name="title" placeholder="Les régions de France"/>
                </fieldset>
            </div>
            <div class="col-md-6 form-inline">
                <fieldset class="form-group en-title">
                    <label for="en-title"><sup><i class="fa fa-asterisk"></i></sup>English lesson Title</label>
                    <input type="text" id="en-title" class="form-control" name="en-title" placeholder="French regions"/>
                </fieldset>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 form-inline">
                <fieldset class="form-group lang">
                    <label for="lang"><sup><i class="fa fa-asterisk"></i></sup>Langue</label>
                    <select id="lang" name="lang">
                        <option value="0">Français</option>
                        <option value="1">English</option>
                        <option value="2">Spanish</option>
                        <option value="3">Deutch</option>
                    </select>
                </fieldset>
            </div>
            <div class="col-md-6 form-inline">
                <fieldset class="form-group domaine">
                    <label for="domaines"><sup><i class="fa fa-asterisk"></i></sup>Domaine</label>
                    <input id="domaines" name="domaines" type="text" placeholder="domaines"/>
                </fieldset>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 form-inline">
                <fieldset class="form-group resume">
                    <label for="resume"><sup><i class="fa fa-asterisk"></i></sup>résumé</label>
                    <input type="text" id="resume" class="form-control" name="resume" placeholder="Résumé en 10 mots" maxlength="100"/>
                </fieldset>
            </div>
            <div class="col-md-6 form-inline">
                <fieldset class="form-group champs">
                    <label for="champs"><sup><i class="fa fa-asterisk"></i></sup>Champs</label>
                    <input id="champs" name="champs" type="text" placeholder="champs"/>
                </fieldset>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 form-inline">
                <fieldset class="form-group description">
                    <label for="description"><sup><i class="fa fa-asterisk"></i></sup>Description</label>
                    <textarea id="description" name="description" rows="3" cols="30"></textarea>
                </fieldset>
            </div>
            <div class="col-md-6 form-inline">
                <div class="row">
                    <div class="col-sm-12">
                        <fieldset class="form-group level">
                            <label for="level"><sup><i class="fa fa-asterisk"></i></sup>Niveau</label>
                            <input id="level" name="level" type="text" placeholder="niveau"/>
                        </fieldset>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <fieldset class="form-group time">
                            <label for="time"><sup><i class="fa fa-asterisk"></i></sup>Temps estimé</label>
                            <input class="form-control" id="time" name="time" type="time" placeholder="01:00"/>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
        <div class="row options">
            <div class="col-sm-12 options form-inline">
                <div class="content-options">
                    <div class="label-options">
                        <p>
                            o<br/>
                            p<br/>
                            t<br/>
                            i<br/>
                            o<br/>
                            n<br/>
                            s
                        </p>
                    </div>
                    <div class="row">
                        <div class="col-md-6 form-inline">
                            <fieldset class="form-group vignette-file">
                                <label for="vignette-file">Vignette de la leçon</label>
                                <input type="file" id="vignette-file" class="form-control-file" name="vignette-file"/>
                                <p><small class="text-muted">choisir un fichier (png,jpg, 300ko Maxi)</small></p>
                            </fieldset>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 form-inline">
                            <fieldset class="form-group annexes">
                                <label for="annexes">Annexes</label>
                                <textarea id="annexes" name="annexes" rows="3" cols="30"></textarea>
                            </fieldset>
                        </div>
                        <div class="col-md-6 form-inline">
                            <fieldset class="form-group message">
                                <label for="message">Message aux étudiants</label>
                                <textarea id="message" name="message" rows="3" cols="30"></textarea>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="row">
            <div class="col-sm-12">
                <input type="checkbox" name="formules" id="formules" value="1"/>
                <button type="button" id="add-question" class="btn btn-primary pull-right"><i class="fa fa-plus-square"></i> Ajouter une question</button>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div id="questions">
                    <ul>
                        <li><a href="#tab1">Question 1</a></li>
                        <li><a href="#tab2">Question 2</a></li>
                        <li><a href="#tab3">Question 3</a></li>
                    </ul>
                    <div id="tabs">
                        <div id="tab1">
                            <div class="row">
                                <div class="col-sm-12">
                                    <p class="text-xs-center bg-info">*Creer votre question et fournissez la réponse. La leçon ne sera publiée que si vous posez au moins 3 questions*</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <button type="button" class="btn btn-primary pull-right"><i class="fa fa-hdd-o"></i> Sauver cette question</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <h2>Question 1</h2>
                                    <textarea name="questionEditor1" id="questionEditor1" rows="10" cols="80"></textarea>
                                </div>
                                <div class="col-md-6">
                                    <h2>Réponse attendue</h2>
                                    <textarea name="answerEditor1" id="answerEditor1" rows="10" cols="80"></textarea>
                                </div>
                            </div>
                        </div>
                        <div id="tab2">
                            <div class="row">
                                <div class="col-sm-12">
                                    <p class="text-xs-center bg-info">*Creer votre question et fournissez la réponse. La leçon ne sera publiée que si vous posez au moins 3 questions*</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <button type="button" class="btn btn-primary pull-right"><i class="fa fa-hdd-o"></i> Sauver cette question</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <h2>Question 2</h2>
                                    <textarea name="questionEditor2" id="questionEditor2" rows="10" cols="80"></textarea>
                                </div>
                                <div class="col-md-6">
                                    <h2>Réponse attendue</h2>
                                    <textarea name="answerEditor2" id="answerEditor2" rows="10" cols="80"></textarea>
                                </div>
                            </div>
                        </div>
                        <div id="tab3">
                            <div class="row">
                                <div class="col-sm-12">
                                    <p class="text-xs-center bg-info">*Creer votre question et fournissez la réponse. La leçon ne sera publiée que si vous posez au moins 3 questions*</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <button type="button" class="btn btn-primary pull-right"><i class="fa fa-hdd-o"></i> Sauver cette question</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <h2>Question 3</h2>
                                    <textarea name="questionEditor3" id="questionEditor3" rows="10" cols="80"></textarea>
                                </div>
                                <div class="col-md-6">
                                    <h2>Réponse attendue</h2>
                                    <textarea name="answerEditor3" id="answerEditor3" rows="10" cols="80"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</section>