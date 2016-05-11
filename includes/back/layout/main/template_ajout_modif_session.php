<section id="session">
    <form>
        <div class="row">
            <div class="col-sm-12">
                <a href="#" class="btn btn-danger btn-sm">Supprimer cette session</a>
                <div class="btn-group pull-right" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-primary">Enregistrer</button>
                    <button type="button" class="btn btn-secondary">Activer</button>
                </div>
            </div>
        </div>
        <div class="row title">
            <div class="col-md-6 form-inline">
                <fieldset class="form-group title">
                    <label for="title"><sup><i class="fa fa-asterisk"></i></sup>Titre de la session</label>
                    <input type="text" id="title" class="form-control" name="title" placeholder="LPATC 17"/>
                </fieldset>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 edit-cours">
                <div class="list-cours">
                </div>
                <div class="add-cours">
                    <table class="table">
                        <thead>
                            <tr class="add-cours">
                                <th>
                                    <fieldset class="form-group">
                                        <label for="add-cours-name">Ajouter un cours</label>
                                        <input id="add-cours-name" name="add-cours-name" class="form-control" type="text" placeholder="nom du cours">
                                    </fieldset>
                                </th>
                                <th></th>
                                <th>
                                    <fieldset class="form-group">
                                        <label for="add-cours-date">date de fin du cours</label>
                                        <input id="add-cours-date" name="add-cours-date" class="form-control" type="date">
                                    </fieldset>
                                </th>
                                <th><button id="addcours" type="button" class="btn btn-primary">Ajouter</button></th>
                                <th></th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <button type="button" class="btn btn-primary to-users" title="Switch cours <-> étudiants"><i class="fa fa-toggle-left"></i><i class="fa fa-toggle-right"></i></button>
            </div>
            <div class="col-sm-12 edit-users">
                <button type="button" class="btn btn-primary to-cours" title="Switch cours <-> étudiants"><i class="fa fa-toggle-left"></i><i class="fa fa-toggle-right"></i></button>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="list-profs">
                            <table class="table">
                                <thead>
                                <tr class="add-prof">
                                    <th>
                                        <fieldset class="form-group">
                                            <label for="input-add-prof">Ajouter un collaborateur</label>
                                            <input id="input-add-prof" name="input-add-prof" class="form-control" type="text" placeholder="nom, email...">
                                        </fieldset>
                                    </th>
                                    <th><button id="addprof" type="button" class="btn btn-primary">Ajouter</button></th>
                                </tr>
                                </thead>
                                <tbody id="tbody-addProf">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="list-eleves">
                            <table class="table">
                                <thead>
                                <tr class="add-eleve">
                                    <th>
                                        <fieldset class="form-group">
                                            <label for="input-add-eleve">Ajouter un élève</label>
                                            <input id="input-add-eleve" name="input-add-eleve" class="form-control" type="text" placeholder="nom, email...">
                                        </fieldset>
                                    </th>
                                    <th><button id="addeleve" type="button" class="btn btn-primary">Ajouter</button></th>
                                </tr>
                                </thead>
                                <tbody id="tbody-addEleve">

                                </tbody>
                            </table>
                            <fieldset class="form-group eleve-file">
                                <label for="eleve-file">importer un fichier d'élèves</label>
                                <input type="file" id="eleve-file" class="form-control-file" name="eleve-file"/>
                                <p><small class="text-muted">choisir un fichier (csv 100ko Maxi)</small></p>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</section>