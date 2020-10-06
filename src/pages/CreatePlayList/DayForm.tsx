import React from "react";
import ReactPlayer from "react-player";

interface IDayFormProps {
  onSave: (workoutDay: IWorkoutDay) => void;
  dayNumber: number;
}

class DayForm extends React.Component<
  IDayFormProps,
  { urlInput: string; selectedUrls: string[] }
> {
  state = {
    urlInput: "",
    selectedUrls: [],
  };

  handleAddUrl = () =>
    this.setState((state) => ({
      selectedUrls: [...state.selectedUrls, state.urlInput],
      urlInput: "",
    }));

  handleSaveDay = () => {
    const { onSave, dayNumber } = this.props;
    const { selectedUrls } = this.state;

    onSave({
      day: dayNumber,
      workout: selectedUrls,
    });

    this.reset();
  };

  reset() {
    this.setState({
      urlInput: "",
      selectedUrls: [],
    });
  }

  render() {
    const { dayNumber } = this.props;
    const { urlInput, selectedUrls } = this.state;

    return (
      <>
        <div className="link-form add-playlist-select">
          <h2>Adding for day {dayNumber}</h2>
          <input
            className="styled-input"
            value={urlInput}
            onChange={(event) =>
              this.setState({ urlInput: event.target.value })
            }
          />
          <button className="primary-button" onClick={this.handleAddUrl}>
            Add url
          </button>
          <button className="primary-button" onClick={this.handleSaveDay}>
            Save day
          </button>
        </div>
        <div className="d-flex-center">
          {selectedUrls.map((url, index) => (
            <div className="player">
              <ReactPlayer
                // eslint-disable-next-line
                key={index}
                url={url}
                width="100"
                height="100"
                controls
              />
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default DayForm;
