pragma solidity ^0.4.23;

contract NFToken is ERC721 {
  uint256 constant TITLE_MIN_LENGTH = 8;
  uint256 constant TITLE_MAX_LENGTH = 64;

  /// The item type (1 for shield, 2 for sword, etc)
  mapping(uint256 => uint256) itemType;

  /// The title of the item
  mapping(uint256 => string) itemTitle;

  /**
   * @dev Creates an instance of an item and mints it to the purchaser
   * @param _title The short title of the item
   */
  function buyToken (
    uint256 _type,
    string _title,
  ) external payable {
    bytes memory _titleBytes = bytes(_title);
    require(_titleBytes.length > TITLE_MIN_LENGTH);
    require(_titleBytes.length <= TITLE_MAX_LENGTH);

    // this could cause issues:
    require(_type > 0);

    // TODO: Get this after pushing a new owner using the ERC721 standard
    var index = ?;

    itemType[index] = _type;
    itemTitle[index] = _title;

    BoughtToken(msg.sender, index);
  }

  /**
   * @dev Returns all of the items that the user owns
   * @return An array of item indices
   */
  function myTokens () external view returns (uint256[]) {
    uint256[] memory items = new uint256[](itemCount[msg.sender]);
    uint256 currentIndex = 0;
    for (uint256 i = 0; i < itemOwners.length; i++) {
      if (itemOwners[i] == msg.sender) {
        items[currentIndex++] = i;
      }
    }
    return items;
  }

  function getTokenType (uint256 _itemId) external view returns (uint256) {
    return itemTypes[_itemId];
  }

  function getTokenTitle (uint256 _itemId) external view returns (string) {
    return itemTitle[_itemId];
  }

}
