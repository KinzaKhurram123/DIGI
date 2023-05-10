import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Category from '../Screens/Main/Category';
import MedicianA_Z from '../Screens/Main/MedicianA_Z';
import Medician_systemic from '../Screens/Main/Medician_systemic';
import MyCart from '../Screens/Main/MyCart';
import Search from '../Screens/Main/Search';
import Conformation from '../Screens/Main/code';
import Login from '../Screens/Main/Login/index.js';
import Signup from '../Screens/Main/Signup';
import Splash from '../Screens/Main/Splash';
import start from '../Screens/Main/Start';
import { View } from 'react-native/types';
import ViewProduct from '../Screens/ViewProducts';
import OrderPlaced from '../Screens/Main/OrderPlaced';
import SelectLOcation from '../Screens/SelectLocation';
import Location from '../Screens/Location';
import Payment from '../Screens/Payment';
import EditProfile from '../Screens/Main/EditProfile';
import Filter from '../Screens/Filter';

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
      <Stack.Screen name='Mycart' component={MyCart}/>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="ViewProduct" component={ViewProduct} />
      <Stack.Screen name="OrderPlaced" component={OrderPlaced} />
      <Stack.Screen name="SelectLocation" component={SelectLOcation} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Filter" component={Filter} />
    </Stack.Navigator>
  );
}
export default RegisterStack;
