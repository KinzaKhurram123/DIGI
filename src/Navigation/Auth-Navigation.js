import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Category from '../Screens/Main/Category';
import MedicianA_Z from '../Screens/Main/MedicianA_Z';
import Medician_systemic from '../Screens/Main/Medician_systemic';
import Search from '../Screens/Main/Search';
import Conformation from '../Screens/Register/Conformation';
import Login from '../Screens/Register/Login/index.js';
import Signup from '../Screens/Register/Signup';
import Splash from '../Screens/Register/Splash';
import start from '../Screens/Register/Start';

const Stack = createNativeStackNavigator();

function RegisterStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Splash'}>
      <Stack.Screen name="Splah" component={Splash} />
      <Stack.Screen name="Start" component={start} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Conformation" component={Conformation} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name='MedicianA_Z' component={MedicianA_Z} />
      <Stack.Screen name='Medician_systemic' component={Medician_systemic} />
      {/* <Stack.Screen name="Search" component={Search} /> */}


    </Stack.Navigator>
  );
}
export default RegisterStack;
