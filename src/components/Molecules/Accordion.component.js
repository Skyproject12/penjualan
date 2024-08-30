import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {Line} from '../Atoms';
import {Icon} from 'react-native-elements';
import {isEmpty} from 'lodash';
import {Colors} from '../../utils';

const onPressDetail = (isSelected, setIsSelected) => {
  setIsSelected(!isSelected);
};

const renderHideItem = (itemHidden, containerLine, containerLineHide) => (
  <View style={styles.containerHide}>
    <TouchableWithoutFeedback onPress={() => {}}>
      <View>
        {itemHidden}
        {!isEmpty(containerLine) && (
          <Line styles={[styles.contaierLine, containerLineHide]} />
        )}
      </View>
    </TouchableWithoutFeedback>
  </View>
);

function Accordion({
  iconClose = 'caret-right',
  iconOpen = 'caret-down',
  typeClose = 'font-awesome',
  typeOpen = 'font-awesome',
  colorIcon = Colors.HEADER1,
  containerItem = {},
  valueDefault = false,
  itemShow,
  sizeIcon = 20,
  containerLine = {},
  itemHidden,
  containerLineHide = {},
  displayIcon = true,
}) {
  const [isSelected, setIsSelected] = useState(valueDefault);
  const nameIcon = !isSelected ? iconClose : iconOpen;
  const typeIcon = !isSelected ? typeClose : typeOpen;

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => onPressDetail(isSelected, setIsSelected)}>
          <View>
            <View style={[styles.containerGeneral, containerItem]}>
              {itemShow}
              {displayIcon && (
                <View style={styles.containerRight}>
                  <Icon
                    style={[
                      styles.iconCheckType,
                      {fontSize: sizeIcon, color: colorIcon},
                    ]}
                    name={nameIcon}
                    type={typeIcon}
                  />
                </View>
              )}
            </View>
            {!isEmpty(containerLine) && <Line styles={containerLine} />}
          </View>
        </TouchableWithoutFeedback>
        {isSelected &&
          renderHideItem(itemHidden, containerLine, containerLineHide)}
      </View>
    </ScrollView>
  );
}

export default Accordion;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderRadius: 5,
  },
  containerGeneral: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCheckType: {
    textAlign: 'center',
    marginLeft: 8,
  },
  containerHide: {
    flex: Dimensions.get('window').width - 32,
    flexDirection: 'column',
    backgroundColor: Colors.WHITE,
  },
  containerRight: {
    alignItems: 'flex-end',
  },
  contaierLine: {
    width: Dimensions.get('window').width - 32,
    height: 0.5,
    backgroundColor: Colors.LINE,
    marginTop: 12,
    marginBottom: 12,
  },
});
