import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Web3 from 'web3'

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.Web3 = Web3

const provider = new Web3.providers.HttpProvider("http://localhost:8545");
global.window.web3 = new Web3(provider);
global.window.web3.eth.defaultAccount = global.window.web3.eth.accounts[0]
