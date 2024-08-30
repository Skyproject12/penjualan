import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import StaticImage from './Image/StaticImage.component';
import {
  ICDaftarKelas,
  ICDaftarKelasOutline,
  ICHome,
  ICHomeOutline,
  ICNotification,
  ICNotificationOutline,
  ICProfile,
  ICProfileOutline,
  ICRangking,
  ICRangkingOutline,
} from '../../assets';
import {Colors, Style} from '../../utils';
import {useQuery} from '@apollo/client';
import {queries} from '../../graphql';
import {get} from 'lodash';

function TabItem({title, active, onPress, onLongPress}) {
  const {data} = useQuery(queries.getTabItem);
  const notif = get(data, 'getActiveCountNotifikasi', {});
  const count = get(notif, 'count', 0);

  const Image = () => {
    if (title === 'Beranda') {
      return active ? (
        <StaticImage source={ICHome} width={36} />
      ) : (
        <StaticImage source={ICHomeOutline} width={36} />
      );
    }

    if (title === 'Daftar Kelas') {
      return active ? (
        <StaticImage source={ICDaftarKelas} width={29} />
      ) : (
        <StaticImage source={ICDaftarKelasOutline} width={28} />
      );
    }

    if (title === 'Rangking') {
      return active ? (
        <StaticImage source={ICRangking} width={32} />
      ) : (
        <StaticImage source={ICRangkingOutline} width={32} />
      );
    }

    if (title === 'Notifikasi') {
      return (
        <View>
          <View style={styles.containerNotif}>
            <Text style={Style.SB_10_WHITE}>{count}</Text>
          </View>
          {active ? (
            <StaticImage source={ICNotification} width={33} />
          ) : (
            <StaticImage source={ICNotificationOutline} width={30} />
          )}
        </View>
      );
    }

    return active ? (
      <StaticImage source={ICProfile} width={28} />
    ) : (
      <StaticImage source={ICProfileOutline} width={28} />
    );
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Image />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
}

export default TabItem;

const styles = StyleSheet.create({
  text: active => ({
    fontSize: 11,
    color: active ? Colors.PRIMARY : Colors.HEADER1,
    marginTop: -4,
  }),
  container: {
    alignItems: 'center',
  },
  containerNotif: {
    position: 'absolute',
    backgroundColor: 'red',
    paddingHorizontal: 6,
    borderRadius: 10,
    zIndex: 10,
    paddingVertical: 2,
    marginLeft: 12,
    marginTop: -2,
  },
});
