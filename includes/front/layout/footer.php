<div class="clearfix"></div>
<section id="infos">
    <div class="columns">
        <div class="left">
            <form action="#">
                <label for="email">Contactez-nous</label>
                <input type="email" id="email" name="email" placeholder="Entrez votre adresse Email" />
                <textarea name="message" id="message" cols="30" rows="3">Votre message</textarea>
                <button type="submit">Ok</button>
            </form>
        </div>
        <div class="right">
            <a href="/index.php?want=front_about" title="En savoir plus sur POEM" class="apropos">A propos de <span>POEM</span></a>
            <a href="./css/assets/partenaires.png"><div class="partenaires"></div></a>
            <div class="links">
                <a <?php if(!$_SESSION['anonymous']) { print 'href="/index.php?want=front_legal"'; } else { print 'href="/index.php?want=front_anonymous_legal"'; } ?> title="mentions légales">Mentions légales</a>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
</section>