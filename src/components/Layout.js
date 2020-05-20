import React from 'react';

class Layout extends React.Component {
    render() {
        const {title} = this.props;
        return (
            <div className="container">
                {title}
            </div>
        )
    }
}

export default Layout;