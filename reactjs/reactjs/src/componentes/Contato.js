import gps from '../imgs/gps.png';
import whatsapp from '../imgs/whatsapp.png';
import './Contato.css';

const Contato = () => {
  
  return (
        <div class="painel1">
            <div class="painelContato">
                <div class="divContato">
                    <h2>Maria's Tour</h2>
                    <img src={gps} width="50px"/>
                    <p>Rua José Diniz Maia, 889 <br> </br>32063-753, Brasil</p>
                    <p>Minas Gerais - MG</p>
                    <br/>
                    <br/>
                    <br/>
                    <a href="https://api.whatsapp.com/send?phone=552123848932571">
                        <img src={whatsapp} width="20px"/>
                        (31) 9999-9999
                    </a>
                </div>
                <div class="divContato">
                    <form>
                        <h3>Fale conosco</h3>
                        <hr/>
                        <input type="text" class="inputsForm" name="nome" placeholder="Insira seu nome"/>
                        <br/>
                        <input type="email" class="inputsForm" name="email" placeholder="mariastourl@gmail.com"/>
                        <br/>
                        <input type="tel" class="inputsForm" name="tel" placeholder="(xx) xxxxx-xxxx"/>
                        <br/>
                        <textarea id="w3review" class="inputsForm" name="w3review" rows="4" cols="50"
                            placeholder="Deixe sua mensagem"></textarea>
                        <br/>
                        <button class="btn">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
  );
}

export default Contato;
