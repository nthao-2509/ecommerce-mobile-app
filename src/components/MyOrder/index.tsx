import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../Container'
import Header from '../Header'
import { Button, Card, Tab, TabBar } from '@ui-kitten/components'
import Colors from '../../modules/Colors'
import { DataMyOrder } from './fakeData'
import ScrollViewCustom from '../ScrollView'
const MyOrder = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [arrayData, setArrayData] = React.useState<any>(DataMyOrder)

  const handleTabs = (key: number) => {
    setSelectedIndex(key)
    switch (key) {
      case 0:
        setArrayData(DataMyOrder)
        return
      case 1:
        const filter = DataMyOrder?.filter((item: any) => item.status === 1)
        setArrayData(filter)
        return
      case 2:
        const filterStatus2 = DataMyOrder?.filter((item: any) => item.status === 2)
        setArrayData(filterStatus2)
        return
      default:
        return
    }
  }
  return (
    <Container>
      <Header title='Đơn hàng của tôi' />
      <View
        style={{
          marginTop: 20,
        }}
      >
        <View>
          <TabBar
            style={{
              backgroundColor: 'transparent',
            }}
            selectedIndex={selectedIndex}
            onSelect={(index) => handleTabs(index)}
          >
            <Tab title='Tất cả' />
            <Tab title='Hoàn thành' />
            <Tab title='Hủy đơn' />
          </TabBar>
        </View>
        <ScrollViewCustom>
          {arrayData?.map((item: any) => (
            <Card
              style={{
                marginVertical: 10,
                paddingVertical: 10,
                paddingHorizontal: 20,
              }}
              key={item.id}
            >
              <View
                style={{
                  borderBottomColor: Colors.gray,
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 15,
                    textAlign: 'left',
                  }}
                >
                  {item.code} {item.id}
                </Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 15,
                    textAlign: 'left',
                    color: Colors.gray,
                  }}
                >
                  {item.date}
                </Text>
              </View>
              <View
                style={{
                  borderBottomColor: Colors.gray,
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 15,
                    textAlign: 'left',
                  }}
                >
                  Tổng đơn hàng:
                </Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 15,
                    textAlign: 'left',
                    color: Colors.gray,
                  }}
                >
                  {item.total}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}
              >
                <Button>DETAIL</Button>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 15,
                    textAlign: 'left',
                    color: item.status === 0 ? Colors.blueGradiant : item.status === 1 ? Colors.green : Colors.red,
                  }}
                >
                  {item.status === 0 && 'Đang giao'}
                  {item.status === 1 && 'Thành công'}
                  {item.status === 2 && 'Hủy'}
                </Text>
              </View>
            </Card>
          ))}
        </ScrollViewCustom>
      </View>
    </Container>
  )
}

export default MyOrder

const styles = StyleSheet.create({})
