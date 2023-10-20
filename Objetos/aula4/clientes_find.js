const clientes = [
    {
      nome: "Olva",
      email: "olippini0@deviantart.com",
      telefone: [
        "4733865848",
        "47933865848"
      ],
      endereco: {
        logradouro: "Rua Transport",
        numero: "05",
        cep: "46140",
        apartamento: true,
        complemento: "ap 102"
      }
    },
    {
      nome: "Oralle",
      email: "orajchert1@clickbank.net",
      telefone: [
        "5896279799",
        "58996279799"
      ],
      endereco: {
        logradouro: "Rua Kedzie",
        numero: "89",
        cep: "613840",
        apartamento: false
      }
    },
    {
      nome: "Amye",
      email: "aranahan2@yellowbook.com",
      telefone: [
        "1918820860",
        "19918820860"
      ],
      endereco: {
        logradouro: "Rua Karstens",
        numero: "59",
        cep: "627533",
        apartamento: true,
        complemento: "ap 401"
      }
    },
    {
      nome: "Greer",
      email: "gtumielli3@vimeo.com",
      telefone: [
        "9466883489",
        "94966883489"
      ],
      endereco: {
        logradouro: "Rua Algoma",
        numero: "077",
        apartamento: false
      }
    },
    {
      nome: "Juliet",
      email: "jelphey4@wikipedia.org",
      telefone: [
        "1198123183",
        "11998123183"
      ],
      endereco: {
        logradouro: "Rua Crownhardt",
        numero: "07",
        cep: "184366",
        apartamento: false
      }
    },
    {
      nome: "Blakeley",
      email: "bmccaughran5@blog.com",
      telefone: [
        "7919437785",
        "79919437785"
      ],
      endereco: {
        logradouro: "Rua Stone Corner",
        numero: "40429",
        cep: "1000",
        apartamento: true
      }
    },
    {
      nome: "Leeann",
      email: "lhuckleby6@tuttocitta.it",
      telefone: [
        "9045673092",
        "90945673092"
      ],
      endereco: {
        logradouro: "Rua Center",
        numero: "549",
        apartamento: false
      }
    },
    {
      nome: "Tildi",
      email: "tmilthorpe7@answers.com",
      telefone: [
        "3149463623",
        "31949463623"
      ],
      endereco: {
        logradouro: "Rua Clyde Gallagher",
        numero: "3962",
        apartamento: false
      }
    },
    {
      nome: "Kirby",
      email: "kcoard8@squidoo.com",
      telefone: [
        "9291767581",
        "92991767581"
      ],
      endereco: {
        logradouro: "Rua Valley Edge",
        numero: "5",
        cep: "20195",
        apartamento: false,
        complemento: "Venda da tia Zezé"
      }
    }]

    function encontrar(array, chave, valor) {
        return array.find((array) => array[chave].includes(valor))

    }

    const encontrado = encontrar(clientes, "email", "kcoard8@squidoo.com")

    console.log(encontrado)