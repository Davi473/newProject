import axios from "axios";

test("Test Usuario", async function() {

  const url = "http://localhost:3000/api";
  const lancamento = await axios({
    method: "post", url: url + "/register", data: {
        name: "Davi", senha: "1234"
    }
  })
  console.log(lancamento);
      
  //se for class "toBeInstanceOf" se for interface "toHaveProperty"
  //expect(get).toBeInstanceOf(Promise<Lancamento>);
});
