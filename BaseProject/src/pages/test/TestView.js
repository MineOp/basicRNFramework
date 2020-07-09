import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  DeviceEventEmitter,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from '../../components/NavigationBar';
import {TYPE_LANGUAGE} from '../../services/LanguageService';
import {useTheme} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {Palette} from '../../api/themes';
import SYImagePicker from 'react-native-syan-image-picker';
import FastImage from 'react-native-fast-image';
import ImageView from 'react-native-image-viewing';
// const {state} = useSelector((state) => state.app);
const {width} = Dimensions.get('window');
const MENU = {
  CUSTOM_TAG: {
    title: '自定义标签',
    component: 'Tag',
    flag: TYPE_LANGUAGE.FLAG_KEY,
  },
  CUSTOM_LANGUAGE: {
    title: '自定义语言',
    component: 'Tag',
    flag: TYPE_LANGUAGE.FLAG_LANGUAGE,
  },
  CUSTOM_THEME: {
    title: '主题设置',
    component: 'Theme',
    flag: 'TYPE_THEME',
  },
};
const TestView = () => {
  const dispatch = useDispatch();
  const [photos, setData] = useState([]);

  const {colors} = useTheme();
  const navigation = useNavigation();
  const handleClick = (target) => {
    navigation.push(target.component, {
      ...target,
    });
  };
  const images = [
    {
      uri:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594199503305&di=74c37e3a94ce24370e2d8b1d3b85622b&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg',
    },
    {
      uri:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594199503305&di=7d5125a8edf15426acfae0ce115fc4e2&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F56%2F12%2F01300000164151121576126282411.jpg',
    },
    {
      uri:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594199503305&di=6387ced63ca594e871d981df8673f886&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F64%2F76%2F20300001349415131407760417677.jpg',
    },
    {
      uri:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594199503305&di=74c37e3a94ce24370e2d8b1d3b85622b&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg',
    },
    {
      uri:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594199503305&di=7d5125a8edf15426acfae0ce115fc4e2&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F56%2F12%2F01300000164151121576126282411.jpg',
    },
    {
      uri:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594199503305&di=6387ced63ca594e871d981df8673f886&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F64%2F76%2F20300001349415131407760417677.jpg',
    },
    {
      uri:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594199503305&di=74c37e3a94ce24370e2d8b1d3b85622b&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg',
    },
    {
      uri:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594199503305&di=7d5125a8edf15426acfae0ce115fc4e2&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F56%2F12%2F01300000164151121576126282411.jpg',
    },
    {
      uri:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594199503305&di=6387ced63ca594e871d981df8673f886&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F64%2F76%2F20300001349415131407760417677.jpg',
    },
    {
      uri:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594199503305&di=74c37e3a94ce24370e2d8b1d3b85622b&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg',
    },
    {
      uri:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594199503305&di=7d5125a8edf15426acfae0ce115fc4e2&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F56%2F12%2F01300000164151121576126282411.jpg',
    },
    {
      uri:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594199503305&di=6387ced63ca594e871d981df8673f886&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F64%2F76%2F20300001349415131407760417677.jpg',
    },
    {
      uri:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594199503305&di=74c37e3a94ce24370e2d8b1d3b85622b&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg',
    },
    {
      uri:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594199503305&di=7d5125a8edf15426acfae0ce115fc4e2&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F56%2F12%2F01300000164151121576126282411.jpg',
    },
    {
      uri:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594199503305&di=6387ced63ca594e871d981df8673f886&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F64%2F76%2F20300001349415131407760417677.jpg',
    },
  ];

  const [visible, setIsVisible] = useState(false);
  const {stateCount} = useSelector((state) => state.count);
  function addCount() {
    dispatch.count.update({stateCount: Math.random()});
  }
  requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: '申请读写手机存储权限',
          message:
            '一个很牛逼的应用想借用你的摄像头，' +
            '然后你就可以拍出酷炫的皂片啦。',
          buttonNeutral: '等会再问我',
          buttonNegative: '不行',
          buttonPositive: '好吧',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('现在你获得摄像头权限了');
      } else {
        console.log('用户并不给你');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  handleOpenImagePicker = () => {
    SYImagePicker.showImagePicker(
      {
        imageCount: 1,
        isRecordSelected: true,
        isCrop: true,
        showCropCircle: true,
        quality: 90,
        compress: true,
        enableBase64: false,
      },
      (err, photos) => {
        console.log('开启', err, photos);
        if (!err) {
          // this.setState({
          //   photos,
          // });
          setData(photos);
        } else {
          console.log(err);
        }
      },
    );
  };

  /**
   * 使用方式sync/await
   * 相册参数暂时只支持默认参数中罗列的属性；
   * @returns {Promise<void>}
   */
  handleAsyncSelectPhoto = async () => {
    // SYImagePicker.removeAllPhoto()
    try {
      const photos = await SYImagePicker.asyncShowImagePicker({
        // allowPickingOriginalPhoto: true,
        imageCount: 1,
        isGif: true,
        isRecordSelected,
        enableBase64: true,
      });
      console.log('关闭', photos);
      // 选择成功
      this.setState({
        photos: [...this.state.photos, ...photos],
      });
    } catch (err) {
      console.log(err);
      // 取消选择，err.message为"取消"
    }
  };

  handlePromiseSelectPhoto = () => {
    SYImagePicker.asyncShowImagePicker({imageCount: 3})
      .then((photos) => {
        console.log(photos);
        const arr = photos.map((v) => {
          return v;
        });
        // 选择成功
        // this.setState({
        //   photos: [...this.state.photos, ...arr],
        // });
        setData(photos);
      })
      .catch((err) => {
        // 取消选择，err.message为"取消"
      });
  };

  handleLaunchCamera = async () => {
    await this.requestPermission();
    SYImagePicker.openCamera(
      {isCrop: true, showCropCircle: true, showCropFrame: false},
      (err, photos) => {
        console.log(err, photos);
        if (!err) {
          // this.setState({
          //   photos: [...this.state.photos, ...photos],
          // });
          setData(photos);
        }
      },
    );
  };

  handleDeleteCache = () => {
    SYImagePicker.deleteCache();
  };

  handleOpenVideoPicker = () => {
    SYImagePicker.openVideoPicker(
      {allowPickingMultipleVideo: true},
      (err, res) => {
        console.log(err, res);
        if (!err) {
          let photos = photos;
          res.map((v) => {
            photos.push({...v, uri: v.coverUri});
          });
          // this.setState({
          //   photos,
          // });
          setData(photos);
        }
      },
    );
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <NavigationBar
        style={{backgroundColor: colors.primary}}
        title={'我的'}
        statusBar={{backgroundColor: colors.primary}}
      />
      <ScrollView>
        <TouchableOpacity
          onPress={() =>
            dispatch.count.changeTheme({
              theme: Palette.Blue[`${parseInt(Math.random() * 10) * 100}`],
              callback: () => {
                DeviceEventEmitter.emit('THEME_CHANGED');
              },
            })
          }>
          <View style={styles.group}>
            <Text
              style={[
                styles.title,
                {color: colors.text},
              ]}>{`changeTheme`}</Text>

            <Icon name={'ios-arrow-forward'} color={colors.primary} size={25} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addCount()}>
          <View style={styles.group}>
            <Text
              style={[
                styles.title,
                {color: colors.text},
              ]}>{`${stateCount}`}</Text>

            <Icon name={'ios-arrow-forward'} color={colors.primary} size={25} />
          </View>
        </TouchableOpacity>
        <FastImage
          style={{width: 200, height: 200}}
          source={{
            uri: 'https://unsplash.it/400/400?image=1',
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={styles.scroll}>
          <Button title={'拍照'} onPress={this.handleLaunchCamera} />
          <Button title={'开启压缩'} onPress={this.handleOpenImagePicker} />
          <Button title={'关闭压缩'} onPress={this.handleAsyncSelectPhoto} />
          <Button
            title={'选择照片(Promise)带base64'}
            onPress={this.handlePromiseSelectPhoto}
          />
          <Button
            title={'缓存清除'}
            onPress={() => {
              SYImagePicker.deleteCache();
            }}
          />
          <Button title={'选择视频'} onPress={this.handleOpenVideoPicker} />
          <Button
            title={'照片缩放'}
            onPress={() => {
              setIsVisible(true);
            }}
          />
        </View>
        <ScrollView style={{flex: 1}} contentContainerStyle={styles.scroll}>
          {photos.map((photo, index) => {
            let source = {uri: photo.uri};
            if (photo.enableBase64) {
              source = {uri: photo.base64};
            }
            return (
              <Image
                key={`image-${index}`}
                style={styles.image}
                source={source}
                resizeMode={'contain'}
              />
            );
          })}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default TestView;
const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={{color: '#fff', fontSize: 16}}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#2196F3',
    borderStyle: 'solid',
  },
  group: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    borderStyle: 'solid',
  },
  groupTitle: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 5,
    fontSize: 14,
    color: 'gray',
  },
  title: {
    flex: 1,
  },
  item: {
    padding: 10,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  btn: {
    backgroundColor: '#FDA549',
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    paddingHorizontal: 12,
    margin: 5,
    borderRadius: 22,
  },
  scroll: {
    padding: 5,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  image: {
    margin: 10,
    width: (width - 80) / 3,
    height: (width - 80) / 3,
    backgroundColor: '#F0F0F0',
  },
});
