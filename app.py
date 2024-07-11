from flask import Flask, render_template, request, send_file
from config import email,senha
from flask_mail import Message, Mail


app = Flask(__name__)
app.secret_key = 'meu_perfil_secreto'

# Configuração do Flask-Mail para o Gmail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = email
app.config['MAIL_PASSWORD'] = senha

mail = Mail(app)

@app.route("/")
@app.route("/home")
def pagina_inicial():
    return render_template('home.html')

@app.route("/sobremim")
def sobremim():
    return render_template('about-me.html')

@app.route("/experiencias")
def experiencias():
    return render_template('experiencias.html')

@app.route("/portfolio")
def portfolio():
    return render_template('portfolio.html')

@app.route("/contato")
def contato():
    return render_template('contato.html')

@app.route("/enviar_email", methods=['POST'])
def enviar_email():
    nome = request.form['nome']
    sobrenome = request.form['sobrenome']
    email = request.form['email']
    telefone = request.form['telefone']
    mensagem = request.form['mensagem']

    msg = Message('Meu site pessoal', sender=email, recipients=['vinybfm@hotmail.com'])
    msg.body = f"""
    Nome: {nome} {sobrenome}
    Email: {email}
    Telefone: {telefone}
    Mensagem: {mensagem}
    """

    mail.send(msg)

    mensagem = "Mensagem enviada com sucesso!"

    return render_template('contato.html', mensagem=mensagem)

@app.route('/download_cv')
def download_cv():
    return send_file('static/image/Vinicius Ferreira.pdf', as_attachment=True)

if __name__ == "__main__":
    app.run(debug=True)