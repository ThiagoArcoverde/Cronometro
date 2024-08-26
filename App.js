import { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      numero: 0,
      botaoTxt: 'Start',
      lastTime: null
    }

    this.timer = null
    this.start = this.start.bind(this)
    this.limpar = this.limpar.bind(this)

  }

  start() {
    if (this.timer != null) {
      clearInterval(this.timer)
      this.timer = null
      this.setState({
        botaoTxt: 'Start'
      })
      return
    }

    this.timer = setInterval(() => {
      this.setState({
        numero: this.state.numero + 0.01
      })

    }, 10)
    this.setState({
      botaoTxt: 'Stop'
    })
  }

  limpar() {
    if (this.timer != null) {
      clearInterval(this.timer)
      this.timer = null
    }
    this.setState({
      lastTime: this.state.numero.toFixed(2),
      numero: 0,
      botaoTxt: 'Start'
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <Image
          source={require('./src/cronometro.png')}
          style={styles.cronometro}
        />
        <Text style={styles.timer}>{this.state.numero.toFixed(2)}</Text>

        <View style={styles.btnArea}>

          <TouchableOpacity style={styles.btn} onPress={this.start}>
            <Text style={styles.btnTexto}>
              {this.state.botaoTxt}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnTexto}>
              Limpar
            </Text>
          </TouchableOpacity>

        </View>
        <View style={styles.areaUltimo}>

          <Text style={styles.textoUltimoTempo}>Ultimo tempo: {this.state.lastTime}</Text>

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00AEEF'
  },
  timer: {
    marginTop: -160,
    color: 'white',
    fontSize: 64,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 80,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 64,
    margin: 16,
    borderRadius: 16
  },
  btnTexto: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00AEEF'
  },
  areaUltimo: {
    marginTop: 64,
  },
  textoUltimoTempo: {
    fontSize: 24,
    fontStyle: 'italic',
    color: 'white'
  }
})

export default App