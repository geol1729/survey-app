import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href='/auth/google'>Login With Google</a>
          </li>
        );
      default:
        return [
          <li key='1'>
            <Payments />
          </li>,
          <li key='3' style={{ margin: '0 42px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key='2'>
            <a href='/api/logout'>Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className='nav-wrapper container'>
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className='left brand-logo'
          >
            Bloomers Survey
          </Link>
          <ul className='right'>{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);

// class Header extends Component {
//   renderContent() {
//     switch (this.props.auth) {
//       case null:
//         return;
//       case false:
//         return (
//           <li>
//             <Link to='/auth/google'>Login With Google</Link>
//           </li>
//         );
//       default:
//         return [
//           <li key='1'>
//             {/* <Payments /> */}
//           </li>,
//           <li key='3' style={{ margin: '0 10px' }}>
//             Credits: {this.props.auth.credits}
//           </li>,
//           <li key='2'>
//             <Link to='/api/logout'>Logout</Link>
//           </li>
//         ];
//     }
//   }

//   render() {
//     return (
//       <nav>
//         <div className='nav-wrapper container'>
//           <Link
//             to={this.props.auth ? '/surveys' : '/'}
//             className='left brand-logo'
//           >
//             Bloomers Survey
//           </Link>
//           <ul className='right'><Link to='/'>{this.renderContent()}</Link></ul>
//         </div>
//       </nav>
//     );
//   }
// }

// function mapStateToProps({ auth }) {
//   return { auth };
// }

// export default connect(mapStateToProps)(Header);
