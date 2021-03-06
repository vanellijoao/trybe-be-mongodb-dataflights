db.voos.find({
  $and: [{
      litrosCombustivel: {
        $exists: true,
      },
    },
    {
      litrosCombustivel: {
        $lt: 600,
      },
    },
    {
      "empresa.nome": {
        $ne: { $in: ["AZUL", "GOL"] },
      },
    },
  ],
}, {
  _id: 0,
  vooId: 1,
  "empresa.nome": 1,
  litrosCombustivel: 1,
}).limit(1);