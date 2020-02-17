import React from "react";
import Comments from "../Comments";
import MensajeError from "../MensajeError";
import Field from "./components/Field";

class Form extends React.Component {
	state = {
		comentarios: {},
		key: 0,
		name: '',
		comment: '',
		error: false,
		mensajeError: ''
	};

	handleChange = ({ target }) => {
		this.setState({ [target.name]: target.value });
		this.setState({error: false})
	};

	validateInput = input => {

    const caracteres = input.value.length;
		let maximoCaracteres;
		let minimoCaracteres;
		let componenteError;

		// si el input es el de nombre le pongo esos limites de caracteres y si no le pongo los otros para el comentario
		if (input.name === "name") {
			maximoCaracteres = 20;
			minimoCaracteres = 3;
			componenteError = "nombre";
		} else {
			maximoCaracteres = 150;
			minimoCaracteres = 10;
			componenteError = "comentario";
		}

		if (caracteres > minimoCaracteres && caracteres < maximoCaracteres) {
      this.setState({
        error: false
			});
		} else {
			this.setState({
				error:true,
					mensajeError: `El ${componenteError} debe tener entre ${minimoCaracteres} y ${maximoCaracteres}  caracteres`
				
			});
		}
	};

	handleClick = event => {
		event.preventDefault();
		let {name, comment} = this.state;
		if(name.length >= 3  && name.length <= 20 && comment.length >= 10 && comment.length <= 150){
      // copio el objeto de comentarios del state (con el spread opertor ... ) para despues volver a subirlos con los cambios nuevos, si no lo copio es como que se sobreescribe  y no me guarda todo
		const comentarios = { ...this.state.comentarios };

		let comentario = {
			nombre: this.state.name,
			comentario: this.state.comment
		};

		// a comentarios le agrego una 'dimension' mas con una key y dentro de eso tengo el objeto de comentario
		comentarios[this.state.key] = comentario;

		//agrego al state el arreglo comentarios y le sumo 1 a la key para que no se repitan
		this.setState({
			comentarios: comentarios,
			key: this.state.key + 1,
			name: "",
			comment: "",
      error: true,
      mensajeError: ""
		});
    }else{
      this.setState({
        error:true,
        mensajeError: (name.length >= 3 && name.length <= 20) ? 'El comentario debe tener entre 10 y 150 caracteres' : 'El nombre debe tener entre 3 y 20 caracteres'
      })
    }
	};

	render() {
		return (
			<>
				<Comments
					comentarios={this.state.comentarios}
					numComentario={this.state.key}
				/>
				{this.state.error && (
					<MensajeError mensajeError={this.state.mensajeError} />
				)}
				<form className="formulario" >
					<Field
						name="name"
						htmlFor="input-nombre"
						label="Nombre"
						value={this.state.name}
						placeholder="Nombre.."
						id="input-nombre"
						onChange={this.handleChange}
            className={this.state.error ? 'input-error' : ''}
					/>
					<Field
						name="comment"
						htmlFor="input-comentario"
						label="Comentario"
						value={this.state.comment}
						textarea={true}
						placeholder="Comentario..."
						id="input-comentario"
						onChange={this.handleChange}
            className={this.state.error ? 'input-error' : ''}
					/>
					<button
						type="submit"
						id="btn-enviar"
						onClick={this.handleClick}
						disabled={this.state.error}
						className={this.state.error ? "disabled" : ''}
					>
						ENVIAR
					</button>
				</form>
			</>
		);
	}
}

export default Form;
