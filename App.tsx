import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Definindo uma interface para o estado
interface Dica {
  dieta: string;
  atividade: string;
}

const App: React.FC = () => {
  const [dica, setDica] = useState<Dica>({
    dieta: "Coma mais vegetais.",
    atividade: "Faça uma caminhada de 30 minutos."
  });

  const atualizarDica = () => {
    // Simula a atualização das dicas (aqui você pode inserir a lógica para buscar dicas de uma API, por exemplo)
    setDica({
      dieta: "Beba pelo menos 2 litros de água.",
      atividade: "Faça 20 minutos de yoga."
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Dica do Dia</Text>
      
      <Text style={styles.subtitle}>Dieta</Text>
      <Text style={styles.content}>{dica.dieta}</Text>
      
      <Text style={styles.subtitle}>Atividade Física</Text>
      <Text style={styles.content}>{dica.atividade}</Text>
      
      <TouchableOpacity style={styles.button} onPress={atualizarDica}>
        <Text style={styles.buttonText}>Atualizar Dica</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
  },
  content: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default App;
