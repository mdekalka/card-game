import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


import MenuSection from '../MenuSection/MenuSection';
import SoundSection from '../SoundSection/SoundSection';

import { BOARD_AVAILABLE_SIZES } from '../GameShellService';
import { musicList } from '../../config/soundAssets';

class GameMenu extends Component {
  static propTypes = {
    items: PropTypes.array,
    options: PropTypes.object,
    errors: PropTypes.object,
    onMenuToggle: PropTypes.func,
    onSizeItemClick: PropTypes.func,
    onImageSelect: PropTypes.func,
    onStepLimitToggle: PropTypes.func,
    isOptionsInvalid: PropTypes.func
  }

  static defaultProps = {
    items: [],
    options: {},
    errors: {},
    onMenuToggle: () => {},
    onSizeItemClick: () => {},
    onImageSelect: () => {},
    onStepLimitToggle: () => {},
    isOptionsInvalid: () => {}
  }

  render() {
    const stepsLimit = this.props.options.stepsLimit;
    const opti = this.props.isOptionsInvalid();

    return (
      <div className="drawer-container">
        <div className="advanced-menu">
          <div className="menu-row-title nav-btn pointer" onClick={this.props.onMenuToggle}>
            <i className="fa fa-fw fa-angle-double-left" aria-hidden="true"></i>
            Save and Back
          </div>
          <div className="menu-row">
            <div className="menu-row-title">
              <i className="fa fa-fw fa-th-large" aria-hidden="true"></i>
              Board items count:
            </div>
            <div className="menu-row-content">
              <ul className="size-list">
                {BOARD_AVAILABLE_SIZES.map((sizeItem, index) => (
                  <li onClick={() => this.props.onSizeItemClick(sizeItem)} className={classNames('size-item', {'active': sizeItem === this.props.options.size})} key={index}>{sizeItem}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="menu-row">
            <div className="menu-row-title">
              <i className="fa fa-fw fa-picture-o" aria-hidden="true"></i>
              Board images:
            </div>
            <div className="menu-row-content">
              <ul className="image-list">
                {this.props.items.map(imageItem => (
                  <li onClick={() => this.props.onImageSelect(imageItem)} className={classNames('image-item pointer', {'selected': imageItem.selected })} key={imageItem.key}>
                    <i className="fa fa-check-circle-o" aria-hidden="true"></i>
                    <img className="image-picture" src={imageItem.image} alt="" />
                  </li>
                ))}
              </ul>
              <div className="notification-message error">{this.props.errors.invalidImageCount}</div>
            </div>
          </div>
          <div className="menu-row">
            <div className="menu-row-title">
              <i className="fa fa-fw fa-step-forward" aria-hidden="true"></i>
              Steps to end:
            </div>
            <div className="menu-row-content">
              <button className={classNames('btn', {'active': stepsLimit})} onClick={this.props.onStepLimitToggle}>
                {stepsLimit ? 'On' : 'Off'}
              </button>
              {
                stepsLimit &&
                <div className="notification-message">You will be have only <span className="highlight">{stepsLimit}</span> attempts to finish the game</div>
              }
            </div>
          </div>
          <MenuSection header={<Fragment><i className="fa fa-music" aria-hidden="true"></i>Sound list:</Fragment>}>
            <SoundSection />
          </MenuSection>
        </div>
      </div>
    )
  }
}

export default GameMenu;