import React from 'react';
import './Admin.css';
class Add_film extends React.Component {


  logconsole() {
    console.log(document.getElementById('d1').value);
    console.log(document.getElementById('d2').value);
    console.log(document.getElementById('d3').value);
    console.log(document.getElementById('d4').value);
  }

  render() {
    return (
      <div className="cent">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Назва фільма</span>
          </div>
          <input type="text" class="form-control" placeholder="Назва фільма" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">Вибрати фото</span>
          </div>
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="inputGroupFile01" />
            <label class="custom-file-label" for="inputGroupFile01">Вибрати фото</label>
          </div>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Режисер</span>
          </div>
          <input type="text" class="form-control" placeholder="Режисер" aria-label="Режисер" aria-describedby="basic-addon2" />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Актори </span>
          </div>
          <input type="text" class="form-control" placeholder="Актори" aria-label="Режисер" aria-describedby="basic-addon2" />
        </div>
        <label for="basic-url"></label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon3">Силка на фільм</span>
          </div>
          <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
        </div>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">Тривалість</span>
          </div>
          <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
          <div class="input-group-append">
            <span class="input-group-text"></span>
          </div>
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Опис</span>
          </div>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
        <br></br>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">розташування</label>
          </div>
          <select class="custom-select" id="inputGroupSelect01">
            <option selected>В якій кардці буде знаходитися</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <button type="button" class="btn btn-primary btn-lg">Додати</button>
      </div>
    )
  }
}
export default (Add_film);