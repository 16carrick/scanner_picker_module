import React from 'react';
import { StyleSheet,Picker,Button, KeyboardAvoidingView,TextInput,Text, View } from 'react-native';

export default class App extends React.Component {
  
  constructor(){
    super();
    this.state={
      name:'',
      phone:'',
      email:'',
      city:'',
      gate:'',
      
    }
    this.ar=[
    {'city':'Pune','gates':['Front','back']},
    {'city':'Satara','gates':['middle','top','Gate 2']},
    {'city':'Mumbai','gates':['Main','Center','Gate 92']},
    {'city':'Sangli','gates':['Gate 2','Gate 3','Bhint']},
    {'city':'Parbhani','gates':['Side']}
    ]
  
    
    this.returnFuction=this.returnFuction.bind(this)
  }

  returnFuction2(){
    var list=[]
    for(var i=0;i<this.ar.length;i++){
      list.push(<Picker.Item key={i} label={this.ar[i].city} value={this.ar[i].city} />)
    }
    return list
  }

  onclickFn =() => {
    if(this.state.city == 'None' || this.state.gate == 'None'){
      alert('Select the city and gate')
    }
    else{
      alert(this.state.name+'  '+this.state.city+'with '+this.state.gate)
    }
  }


  returnFuction(arg_city){
    var list=[]
    var pl=[]
    var j=0
    for(var i=0;i<this.ar.length;i++){
        if(this.ar[i].city == this.state.city){
          this.ar[i].gates.map(data=>{
            list.push(<Picker.Item key={j} label={data} value={data} />)
            j++
          })
          j=0
        }
    }
      /*this.ar.map((e,key)=>{
        pl.push(e.gates)
      })*/
    if(this.state.city=='Pune'){
        /*this.ar.Pune.map((e,key)=>{
        pl.push(e.gates)
        
      })

        /*for(var i=0 ;i<pl.length ;i++){
             list.push(<Picker.Item key={i} label={pl[i]} value={i} />)    
        }
*/     // console.log(pl)
        
    }
    
    else{
      
      if(this.state.city=='Satara'){
        
        /*this.ar.map((e,key)=>{
        pl.push(e.gates)    
        })
        /*for(var i=0 ;i<pl.length ;i++){
          list.push(<Picker.Item key={i} label={pl[i]} value={i} />)    
        }*/
        
      }
    }
    return list
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <Text>Shake your phone to open the developer menu.</Text>
            <TextInput
                style={{height:50,borderColor:'white',
                  width:150}}
                placeholder={'Enter name'}
                value={this.state.name}
                onChangeText={(name)=>this.setState({name})}
           underlineColorAndroid="transparent" /><TextInput
            style={{height:50,width:150}}
            placeholder={'Enter Email'}
            value={this.state.email}
            keyboardType='email-address'
            onChangeText={(email)=>this.setState({email})}
        />
        <Picker
              style={{height:50,width:150}}          
              selectedValue={this.state.city}
              onValueChange={(itemValue, itemIndex) => this.setState({city: itemValue})}>
              <Picker.Item label="Pick City" value="None"/>
              {this.returnFuction2()}
          </Picker>
          <Picker
              style={{height:50,width:150}}          
              selectedValue={this.state.gate}
              onValueChange={(itemValue, itemIndex) => this.setState({gate: itemValue})}>
              <Picker.Item label="Pick gate" value="None" /> 
              {this.returnFuction(this.state.city)}
          </Picker>
          <TextInput
            style={{height:50,width:150}}
            placeholder={'Phone'}
            value={this.state.phone}
            maxLength={10}
            keyboardType='phone-pad'
            onChangeText={(phone)=>this.setState({phone})}
        />
          <Button
                title='Click me u mf'
                color='magenta'
                onPress={this.onclickFn}
            />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderRadius:0.23,
  }
});
