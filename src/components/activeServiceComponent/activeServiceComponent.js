import React from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import {DotsThree, Trash} from 'phosphor-react-native';

const ActiveServiceComponent = ({item}) => {
  const [days, setDays] = React.useState(0);
  const [percentageToChange, setPercentageToChange] = React.useState();
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleDate = () => {
    let seconds = item.ends.seconds - item.starts.seconds;
    let days = Math.floor(seconds / 86400);

    setPercentageToChange((days / (item.duration * 30.4)) * 100);
    setDays(days);
  };

  React.useEffect(() => {
    handleDate();
  }, []);

  return (
    <View
      style={{
        width: '100%',
        height: 75,
        backgroundColor: '#303030',
        borderRadius: 5,
        marginTop: 20,
        justifyContent: 'center',
      }}>
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text>{item.name}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <DotsThree size={32} weight="bold" color="#999999" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginTop: 2,
          flexDirection: 'row',
          marginHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <Text>{days} dias para efetuar a troca.</Text>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <View
            style={{
              backgroundColor: '#2c2c2c',
              borderRadius: 5,
              padding: 20,
              marginTop: '170%',
              marginHorizontal: 38,
            }}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Trash size={25} color={'#aeaeae'} />
                <Text style={{fontSize: 15, marginLeft: 5}}>
                  Remover serviço
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ActiveServiceComponent;
