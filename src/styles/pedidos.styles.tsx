// src/styles/pedidos.styles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  empty_container: {
    marginTop:150,
    justifyContent: 'center', // Alinha verticalmente no meio
    alignItems: 'center', // Alinha horizontalmente no meio
  },
  container: {
    flex: 1,
    backgroundColor: "#D9D9D9",
  
  },
  title:{padding: 40, 
    marginLeft: 95,
    fontSize:16,
    fontWeight:'bold'

  },
  scrollContent:{
    
   
      padding: 20,
      backgroundColor: "#fff",
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      height: '100%'
    },
    itemContainer: {
      padding: 16,
      marginVertical: 8,
      backgroundColor: '#f8f8f8',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2, // Para efeito de sombra no Android
    },
    itemName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 8,
    },
    itemPrice: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#27ae60', // verde para destacar o preço
      marginBottom: 12,
    },
    itemDetails: {
      fontSize: 14,
      color: '#7f8c8d', // cinza claro
      marginBottom: 12,
    },
    removeButton: {
      padding: 10,
      backgroundColor: '#e74c3c', // vermelho
      borderRadius: 6,
      alignItems: 'center',
    },
    removeButtonText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
    },

});

export default styles;
