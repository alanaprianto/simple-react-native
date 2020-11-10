import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    containerLogin: { flex: 2, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' },
    inputLogin: { height: 40, borderColor: 'gray', borderWidth: 1, width: '80%', marginVertical: 10, padding: 10, borderRadius: 5 },
    btnRegister: { borderRadius: 10, flex: 1 },
    textRegister: { color: 'blue' },
    btnLogin: { marginVertical: 15, flex: 1, justifyContent: 'center', alignItems: 'center' },
    containerBtn: { flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' },
    viewCheckbox: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
    subContainer: { flex: 1 }
});

export default styles;