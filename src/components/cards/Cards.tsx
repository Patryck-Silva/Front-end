import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Cards.css'


function Cards() {
    return (
        <>
            <div className='sobre-devs-cards'>
                <div className="card card1">
                    <div className="border">
                        <h2 className="cardTitulo">Beatriz Alves</h2>

                        <div className="icons">

                            <a href="https://www.instagram.com/biawhetumori/" target="_blank">
                                <InstagramIcon className='icone' />
                            </a>
                            <a href="https://github.com/BiaWhetumori" target="_blank">
                                <GitHubIcon className='icone' />
                            </a>
                            <a href="https://www.linkedin.com/in/ant%C3%B4niabeatriz" target="_blank">
                                <LinkedInIcon className='icone' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card card2">
                    <div className="border">
                        <h2 className="cardTitulo">Cipriana </h2>

                        <div className="icons">
                            <a href="https://www.instagram.com/cipri_luis/" target="_blank">
                                <InstagramIcon className='icone' />
                            </a>
                            <a href="https://github.com/ciprianalombendo" target="_blank">
                                <GitHubIcon className='icone' />
                            </a>
                            <a href="http://linkedin.com/in/cipriana-luís-a097bb152" target="_blank">
                                <LinkedInIcon className='icone' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card card3">
                    <div className="border">
                        <h2 className="cardTitulo">Jonathan Brasil</h2>

                        <div className="icons">
                            <a href="https://www.facebook.com/jonathasouzabrasil/" target="_blank">
                                <InstagramIcon className='icone' />
                            </a>
                            <a href="https://www.instagram.com/_jonathanbrasil/" target="_blank">
                                <GitHubIcon className='icone' />
                            </a>
                            <a href="https://www.linkedin.com/in/jonathanbrasil" target="_blank">
                                <LinkedInIcon className='icone' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='sobre-devs-cards2'>
                <div className="card card4">
                    <div className="border">
                        <h2 className="cardTitulo">Patryck Silva</h2>

                        <div className="icons">
                            <a href="https://www.instagram.com/tyckupnext/" target="_blank">
                                <InstagramIcon className='icone' />
                            </a>
                            <a href="https://github.com/Patryck-Silva" target="_blank">
                                <GitHubIcon className='icone' />
                            </a>
                            <a href="https://www.linkedin.com/in/patryck-silva/" target="_blank">
                                <LinkedInIcon className='icone' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card card5">
                    <div className="border">
                        <h2 className="cardTitulo">Pedro Henrique</h2>

                        <div className="icons">
                            <a href="https://www.instagram.com/pedrojapasp/" target="_blank">
                                <InstagramIcon className='icone' />
                            </a>
                            <a href="https://github.com/Pedrobrsp" target="_blank">
                                <GitHubIcon className='icone' />
                            </a>
                            <a href="https://www.linkedin.com/in/pedro-henrique-dsg/" target="_blank">
                                <LinkedInIcon className='icone' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card card6">

                    <div className="border">
                        <h2 className="cardTitulo">Viviane Emelie</h2>

                        <div className="icons">
                            <a href="https://www.instagram.com/vivian_emilie2/" target="_blank">
                                <InstagramIcon className='icone' />
                            </a>
                            <a href="https://github.com/vivi29-emi" target="_blank">
                                <GitHubIcon className='icone' />
                            </a>
                            <a href="https://www.linkedin.com/in/viviane-geraldo-626130238/" target="_blank">
                                <LinkedInIcon className='icone' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards