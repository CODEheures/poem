<div class="inputs">
    <h1>Mon profil</h1>

    <!-- infos personnelles -->
    <div class="basics">
        <h1>Compte utilisateur</h1>
        <form action="#" id="form-profil">
            <!-- validation par librairie http://parsleyjs.org/doc/examples/simple.html -->
            <div class="col2">
                <label for="email">email</label>
                <div class="input-group">
                    <input type="email" id="email" name="email" placeholder="votre email" required=""/>
                </div>
            </div>
            <div class="col2">
                <label for="username">Nom d'utilisateur</label>
                <div class="input-group">
                    <input type="text" id="username" name="username" placeholder="votre nom d'utilisateur" required=""/>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="col2">
                <label for="name">Nom</label>
                <div class="input-group">
                    <input type="text" id="name" name="name" placeholder="votre nom"/>
                </div>
            </div>
            <div class="col2">
                <label for="firstname">Prénom</label>
                <div class="input-group">
                    <input type="text" id="firstname" name="firstname" placeholder="votre prénom"/>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="col2">
                <label for="passwd">Mot de passe<span>8 caractères dont 1 majuscule, 1 minuscule, et 1 chiffre ou caractère spécial exemple: p0EmBe$t</span></label>
                <div class="input-group">
                    <input type="password" id="passwd" name="passwd" required="" minlength="8"
                           pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                           data-parsley-error-message="8 caractères minimum dont au moins 1 majuscule, 1 minuscule et 1 chiffre ou 1 caractère spécial"
                    /><!-- 2ieme patern ici : http://html5pattern.com/Passwords -->
                    <button type="button"><i class="fa fa-eye-slash" aria-hidden="true"></i></button>
                    <div class="reveal"></div>
                </div>
            </div>
            <div class="col2">
                <label for="confirm">Confirmation</label>
                <div class="input-group">
                    <input type="password" id="passwd" name="passwd" required="" data-parsley-equalto="#passwd"/>
                    <button type="button"><i class="fa fa-eye-slash" aria-hidden="true"></i></button>
                    <div class="reveal"></div>
                </div>

            </div>
            <div class="clearfix"></div>
            <div class="validate">
                <input type="submit" class="btn" value="Sauvegarder" />
            </div>
        </form>
    </div>

    <!-- préférences et avatar -->
    <div class="prefs">
        <h1>Préférences</h1>
        <div class="col2">
            <form action="#" class="dropzone" id="avatar">
                <div class="fallback">
                    <input type="file" id="input-avatar">
                </div>
            </form>
        </div>
        <div class="col2">
            <label for="presentation-language">Language de présentation</label>
            <input type="text" id="presentation-language" name="presentation-language"/>
            <label for="content-language">Language de contenu</label>
            <input type="text" id="content-language" name="content-language"/>
         </div>
        <div class="clearfix"></div>
    </div>

    <!-- Compléments -->
    <div class="complement">
        <h1>Niveau d'étude</h1>
        <form action="#">
            <div class="col2">
                <h2>Actuel</h2>
            </div>
            <div class="col2">
                <h2>Souhaité</h2>
            </div>
            <div class="clearfix"></div>
            <div class="col2">
                <label for="levelbefore">Niveau</label>
                <input type="text" id="levelbefore" name="levelbefore"/>
            </div>
            <div class="col2">
                <label for="levelafter">Niveau</label>
                <input type="text" id="levelafter" name="levelafter"/>
            </div>
            <div class="clearfix"></div>
            <div class="col2">
                <label for="domainebefore">Domaine</label>
                <input type="text" id="domainebefore" name="domaineafter"/>
            </div>
            <div class="col2">
                <label for="domaineafter">Domaine</label>
                <input type="text" id="domaineafter" name="domaineafter"/>
            </div>
            <div class="clearfix"></div>
            <div class="col2">
                <label for="champsbefore">Champs</label>
                <input type="text" id="champsbefore" name="champsafter"/>
            </div>
            <div class="col2">
                <label for="champsafter">Champs</label>
                <input type="text" id="champsafter" name="champsafter"/>
            </div>
            <div class="clearfix"></div>
        </form>
    </div>

    <!-- template du drag & drop -->
    <div id="preview-template" style="display: none;">
        <div class="dz-preview dz-file-preview">
            <div class="dz-image"><img data-dz-thumbnail=""></div>

            <div class="dz-details">
                <div class="dz-size"><span data-dz-size=""></span></div>
                <div class="dz-filename"><span data-dz-name=""></span></div>
            </div>
            <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress=""></span></div>
            <div class="dz-error-message"><span data-dz-errormessage=""></span></div>

            <div class="dz-success-mark"><i class="fa fa-check"></i> </div>
            <div class="dz-error-mark"><i class="fa fa-exclamation"></i></div>
        </div>
    </div>
</div>