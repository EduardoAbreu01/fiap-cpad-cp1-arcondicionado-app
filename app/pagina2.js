import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';


export default function Layout(){

    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Página 2</Text>
        </View>
        
    );

}

const styles = StyleSheet.create ({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5' },
    texto: {fontSize: 35}
})
    
