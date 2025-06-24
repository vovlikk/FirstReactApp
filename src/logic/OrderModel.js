import React, { useState } from "react";

function Order({ onClose }) {
  const products = [
    { id: "Kayasoo", name: "Kayasoo Roll" },
    { id: "Urami", name: "Urami Roll" },
    { id: "Killi", name: "Killi Roll" }
  ];

  const [name, setname] = useState('');
  const [phone, setphone] = useState('');
  const [selectedproduct, setproduct] = useState([]);

  const toggleProduct = (id) => {
    setproduct(prev =>
      prev.includes(id) ? prev.filter(pid => pid !== id) : [...prev, id]
    );
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (selectedproduct.length === 0) {
      alert("Пожалуйста, выберите хотя бы один товар для заказа.");
      return;
    }

    const orderItems = products
      .filter(p => selectedproduct.includes(p.id))
      .map(p => p.name)
      .join(", ");

    alert(`Спасибо за заказ, ${name}! Вы заказали: ${orderItems}. Мы свяжемся с вами по номеру ${phone}.`);
    onClose && onClose(); // если есть функция закрытия - вызовем её
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>

        <form className="formorder" onSubmit={handlerSubmit}>
            
           <button className="modal-close" onClick={onClose}>&times;</button>
            <label>
            Ваше имя:
            <input
              value={name}
              placeholder="Введите имя"
              onChange={e => setname(e.target.value)}
              required
            />
          </label>
           
          <br />

          <label>
            
            Телефон:
            <input
              value={phone}
              placeholder="Введите номер телефона"
              onChange={e => setphone(e.target.value)}
              required
            />
          </label>
          <br />

          
            <legend>Выберите товары для заказа:</legend>
            {products.map(product => (
              <label key={product.id} style={{ display: 'block', marginBottom: '6px' }}>
                <input
                  type="checkbox"
                  checked={selectedproduct.includes(product.id)}
                  onChange={() => toggleProduct(product.id)}
                />
                {product.name}
              </label>
            ))}
         
          <br />

          <button type="submit">Заказать</button>
        </form>
      </div>
    </div>
  );
}

export default Order;
