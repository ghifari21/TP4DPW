import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      birthDay: "",
      gender: "",
      hobbies: "",
      religion: "",
      message: "",
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBirthDay = this.handleBirthDay.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleReligion = this.handleReligion.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handle name input
  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  // handle birthday input
  handleBirthDay(event) {
    this.setState({ birthDay: event.target.value });
  }

  // handle gender input
  handleGender(event) {
    this.setState({ gender: event.target.value });
  }

  // handle religion input
  handleReligion(event) {
    this.setState({ religion: event.target.value });
  }

  // handle message input
  handleMessage(event) {
    this.setState({ message: event.target.value });
  }

  handleReset(event) {
    event.preventDefault();
    const table = document.getElementById("table-output");
    if (!table.classList.contains("d-none")) {
      table.classList.add("d-none");
    }
    this.setState({
      name: "",
      birthDay: "",
      gender: "",
      hobby: "",
      religion: "",
      message: "",
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const table = document.getElementById("table-output");
    const form = document.getElementById("input");

    // handle hobby checkbox input
    let hobby = form.elements["hobby"];
    let hobbies = "";
    for (let index = 0; index < hobby.length; index++) {
      if (hobby[index].checked) {
        if (hobbies.length > 0) {
          hobbies += ", ";
        }
        hobbies += hobby[index].value;
      }
    }
    this.setState({ hobbies: hobbies });

    table.classList.remove("d-none");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container mt-5">
            <div className="card shadow px-5 py-3">
              <div className="card-body">
                <h2 className="card-title text-center fw-bold">Biodata</h2>
                <form id="input" className="mt-3" onSubmit={this.handleSubmit}>
                  <div className="mb-3">
                    <label for="name" className="form-label">
                      Nama Lengkap
                    </label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleNameChange} required />
                  </div>
                  <div className="mb-3">
                    <label for="birthDay" className="form-label">
                      Tanggal Lahir
                    </label>
                    <input type="date" className="form-control" id="birthDay" name="birthDay" value={this.state.birthDay} onChange={this.handleBirthDay} required />
                  </div>
                  <div className="mb-3">
                    <label for="gender" className="form-label">
                      Jenis Kelamin
                    </label>
                    <br />
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="Laki-Laki" onChange={this.handleGender} required />
                      <label className="form-check-label" for="inlineRadio1">
                        Laki-Laki
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="Perempuan" onChange={this.handleGender} required />
                      <label className="form-check-label" for="inlineRadio2">
                        Perempuan
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="gender" id="inlineRadio3" value="Other" onChange={this.handleGender} required />
                      <label className="form-check-label" for="inlineRadio2">
                        Other
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="hobby" className="form-label">
                      Hobi
                    </label>
                    <br />
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="hobby" id="inlineCheckbox1" value="Ngoding" onChange={this.handleHobby} />
                      <label className="form-check-label" for="inlineCheckbox1">
                        Ngoding
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="hobby" id="inlineCheckbox2" value="Rebahan" onChange={this.handleHobby} />
                      <label className="form-check-label" for="inlineCheckbox2">
                        Rebahan
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="hobby" id="inlineCheckbox2" value="Melamun" onChange={this.handleHobby} />
                      <label className="form-check-label" for="inlineCheckbox2">
                        Melamun
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="hobby" id="inlineCheckbox2" value="Baca Buku" onChange={this.handleHobby} />
                      <label className="form-check-label" for="inlineCheckbox2">
                        Baca Buku
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="hobby" id="inlineCheckbox2" value="Nonton Youtube" onChange={this.handleHobby} />
                      <label className="form-check-label" for="inlineCheckbox2">
                        Nonton Youtube
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="hobby" id="inlineCheckbox2" value="Dengerin Lagu" onChange={this.handleHobby} />
                      <label className="form-check-label" for="inlineCheckbox2">
                        Dengerin Lagu
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="hobby" id="inlineCheckbox2" value="Other" onChange={this.handleHobby} />
                      <label className="form-check-label" for="inlineCheckbox2">
                        Other
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="religion" className="form-label">
                      Agama
                    </label>
                    <select className="form-select" aria-label="Default select example" id="religion" name="religion" onChange={this.handleReligion} required>
                      <option value="Buddha" selected>
                        Buddha
                      </option>
                      <option value="Hindu">Hindu</option>
                      <option value="Islam">Islam</option>
                      <option value="Katolik">Katolik</option>
                      <option value="Tao">Tao</option>
                      <option value="Protestan">Protestan</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label for="msg" className="form-label">
                      Pesan
                    </label>
                    <textarea className="form-control" id="msg" name="msg" rows="6" onChange={this.handleMessage} required>
                      {this.state.message}
                    </textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" id="submit-btn">
                    Submit
                  </button>
                  <button type="reset" className="btn btn-secondary ms-2" onClick={this.handleReset}>
                    Reset
                  </button>
                </form>
                <div className="table-responsive d-none" id="table-output">
                  <table className="table mt-5">
                    <thead>
                      <tr>
                        <th scope="col" className="w-25">
                          Label
                        </th>
                        <th scope="col">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Nama</th>
                        <td id="dataName">{this.state.name}</td>
                      </tr>
                      <tr>
                        <th scope="row">Tanggal Lahir</th>
                        <td id="dataBirthDay">{this.state.birthDay}</td>
                      </tr>
                      <tr>
                        <th scope="row">Jenis Kelamin</th>
                        <td id="dataGender">{this.state.gender}</td>
                      </tr>
                      <tr>
                        <th scope="row">Hobi</th>
                        <td id="dataHobby">{this.state.hobbies}</td>
                      </tr>
                      <tr>
                        <th scope="row">Agama</th>
                        <td id="dataReligion">{this.state.religion}</td>
                      </tr>
                      <tr>
                        <th scope="row">Pesan</th>
                        <td id="dataMsg">{this.state.message}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
