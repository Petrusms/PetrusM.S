<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
   // Recebe os dados do formulário
   $nome = $_POST['nome'];
   $email = $_POST['email'];

   // Validação básica (opcional)
   if (empty($nome) || empty($email)) {
  
       echo "Todos os campos são obrigatórios!";
  
   } else {
       // Processa os dados (por exemplo, salva no banco de dados)
       echo "Nome: " . htmlspecialchars($nome) . "<br>";
       echo "Email: " . htmlspecialchars($email);
   }

   if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    echo "Formato de email inválido!";
    }

    header("Location: obrigado.php");
    exit();
}
