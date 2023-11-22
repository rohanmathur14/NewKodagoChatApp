<Form.Control
                    ref={textareaRef}
                    as="textarea"
                    rows={1}
                    value={chatMessage}
                    onChange={handleChangeField}
                    onKeyDown={handleKeyDown} // Listen for keydown event
                    placeholder="Type a message"
                    name={`sendMessageFrm`}
                  />