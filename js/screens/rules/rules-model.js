import {stateArray} from '../../data/stateArray';


class RulesModel {
  set name(name) {
    stateArray.push({'playerName': name, 'state': {}});
  }
}

export default RulesModel;
