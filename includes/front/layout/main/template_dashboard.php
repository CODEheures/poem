<section id="dashboard">
    <!-- Indicateurs -->
    <div class="dashboard">
        <div class="inner-container">
            <div class="elo">
                <div class="score-elo">
                    <p class="score">3243</p>
                    <p>Score ELO</p>
                </div>
                <div class="evolution">
                    <canvas id="chartdiv" height="84px" width="214px"></canvas>
                    <p>Evolution ELO</p>
                </div>
            </div>
            <div class="average">
                <p class="note">14.8<span>/20</span></p>
                <p>moyenne générale</p>
            </div>
            <div class="sessions">
                <div class="session1">
                    <div class="text">
                        <div class="points"></div>
                        <p>Licence professionnelle <br />de communication</p>
                        <div class="plus">
                            <div class="orange"></div>
                            <a href="#" title="voir le détail">+</a>
                        </div>
                    </div>
                    <div class="session-average">
                        <p>16.2<span>/ 20</span></p>
                    </div>
                </div>
                <div class="session2">
                    <div class="session-average">
                        <p>16.2<span>/ 20</span></p>
                    </div>
                    <div class="text">
                        <div class="points"></div>
                        <p>Licence professionnelle <br />de communication</p>
                        <div class="plus">
                            <div class="orange"></div>
                            <a href="#" title="voir le détail">+</a>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class="session3">
                    <div class="text">
                        <div class="points"></div>
                        <p>session 3</p>
                        <div class="plus">
                            <div class="orange"></div>
                            <a href="#" title="voir le détail">+</a>
                        </div>
                    </div>
                    <div class="session-average">
                        <p>16.2<span>/ 20</span></p>
                    </div>
                </div>
                <div class="session4">
                    <div class="session-average">
                        <p>16.2<span>/ 20</span></p>
                    </div>
                    <div class="text">
                        <div class="points"></div>
                        <p>Licence professionnelle <br />de communication</p>
                        <div class="plus">
                            <div class="orange"></div>
                            <a href="#" title="voir le détail">+</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="badges">
                <div class="list">
                    <div class="badge badge1"></div>
                    <div class="badge badge2"></div>
                    <div class="badge badge3"></div>
                    <div class="badge badge4"></div>
                    <div class="badge empty"></div>
                    <div class="badge badge5"></div>
                    <div class="badge badge1"></div>
                    <div class="badge badge2"></div>
                    <div class="badge badge3"></div>
                    <div class="badge badge4"></div>
                    <div class="badge empty"></div>
                    <div class="badge badge5"></div>
                </div>
                <div class="plus">
                    <a href="#" title="voir plus">+</a>
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="extend-badges"></div>
        <div class="clearfix"></div>
    </div>
    <!-- List des leçons -->
    <div class="lessons">
        <div class="inner-container">
            <h1>mes leçons</h1>
            <div class="filters">
                <form action="#">
                    <div class="search">
                        <input type="search" name="search" />
                        <button type="button"><i class="fa fa-search"></i></button>
                    </div>
                    <div class="type">
                        <input type="checkbox" id="finished" name="finished"/>
                        <label for="finished">terminées (42)</label>
                        <input type="checkbox" id="uneval" name="uneval"/>
                        <label for="uneval">non évaluées (6)</label>
                        <input type="checkbox" id="run" name="run" />
                        <label for="run">en cours (6)</label>

                    </div>
                    <div class="session">
                        <div class="select">
                            <select>
                                <option value="a125d215ds">LPATC 17</option>
                                <option value="a1csq251c">Master CAWEB17</option>
                                <option value="a12csq1c56">CM2 2015</option>
                                <option value="a125scs">DU WEB 2015</option>
                            </select>
                            <i class="fa fa-caret-down"></i>
                        </div>
                    </div>
                </form>
                <div class="clearfix"></div>
            </div>
            <div class="list">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th><button type="button">Leçons<i class="fa fa-caret-down"></i></button></th>
                            <th><button type="button">Score ELO<i class="fa fa-caret-down"></i></button></th>
                            <th><button type="button">Progression<i class="fa fa-caret-down"></i></button></th>
                            <th><button type="button">Echéance<i class="fa fa-caret-down"></i></button></th>
                            <th><button type="button">Note<i class="fa fa-caret-down"></i></button></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="./public/img/microbiology.jpg" alt="image de le leçon" /></td>
                            <td>Le Lorem Ipsum est simpl
                                ement du faux texte employé dans la composition et la mise en page avant </td>
                            <td>4000</td>
                            <td>1/3</td>
                            <td>15/06/2016</td>
                            <td>16/20</td>
                            <td><a href="#" title="continuer cette leçon">Continuer</a></td>
                        </tr>
                        <tr>
                            <td><img src="./public/img/microbiology.jpg" alt="image de le leçon" /></td>
                            <td>
                                <div class="description">
                                    Le Lorem Ipsum est simpl
                                    ement du faux texte employé dans la composition et la mise en page avant
                                    Le Lorem Ipsum est simplement du faux texte employé dans
                                    ement du faux texte employé dans la composition et la mise en page avant
                                    Le Lorem Ipsum est simplement du faux texte employé dans
                                </div>    
                            </td>
                            <td>4000</td>
                            <td>1/3</td>
                            <td>15/06/2016</td>
                            <td>16/20</td>
                            <td><a href="#" title="continuer cette leçon">Continuer</a></td>
                        </tr>
                        <tr>
                            <td><img src="./public/img/microbiology.jpg" alt="image de le leçon" /></td>
                            <td>
                                <div class="description">
                                    Le Lorem Ipsum est simpl
                                    ement du faux texte employé dans la composition et la mise en page avant
                                </div>
                            </td>
                            <td>4000</td>
                            <td>1/3</td>
                            <td>15/06/2016</td>
                            <td>16/20</td>
                            <td><a href="#" title="continuer cette leçon">Continuer</a></td>
                        </tr>
                        <tr class="free">
                            <td><img src="./public/img/microbiology.jpg" alt="image de le leçon" /></td>
                            <td>
                                <div class="description">
                                    Le Lorem Ipsum est simpl
                                    ement du faux texte employé dans la composition et la mise en page avant
                                </div>
                            </td>
                            <td>4000</td>
                            <td>1/3</td>
                            <td>Libre</td>
                            <td>16/20</td>
                            <td><a href="#" title="continuer cette leçon">Continuer</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
    <!-- Recommandations -->
    <div class="recommandations">
        <div class="inner-container">
            <h1>POEM vous recommande</h1>
            <div class="vignettes">
                <a href="#" class="back"><i class="fa fa-chevron-left"></i></a>
                <a href="#" class="vignette">
                    <div class="orange"></div>
                    <div class="content">
                        <div class="img" data-img="neurone.jpg"></div>
                        <p>Titre de la leçon</p>
                    </div>
                </a>
                <a href="#" class="vignette">
                    <div class="orange"></div>
                    <div class="content">
                        <div class="img" data-img="neurone.jpg"></div>
                        <p>Titre de la leçon</p>
                    </div>
                </a>
                <a href="#" class="vignette">
                    <div class="orange"></div>
                    <div class="content">
                        <div class="img" data-img="neurone.jpg"></div>
                        <p>Titre de la leçon</p>
                    </div>
                </a>
                <a href="#" class="vignette">
                    <div class="orange"></div>
                    <div class="content">
                        <div class="img" data-img="neurone.jpg"></div>
                        <p>Titre de la leçon</p>
                    </div>
                </a>
                <a href="#" class="vignette">
                    <div class="orange"></div>
                    <div class="content">
                        <div class="img" data-img="neurone.jpg"></div>
                        <p>Titre de la leçon</p>
                    </div>
                </a>
                <a href="#" class="next"><i class="fa fa-chevron-right"></i></a>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
</section>